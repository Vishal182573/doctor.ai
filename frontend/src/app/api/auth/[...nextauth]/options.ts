import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { BACKEND_URL } from "../../../../../global/constants";
import dbConnect from "../../../../../lib/dbConnect";
import User from "../../../../../models/User";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials!;
        try {
          const response = await axios.post(`${BACKEND_URL}/api/user/login`, {
            email,
            password,
          });

          if (response.status === 201 && response.data) {
            return response.data;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error in authorize function:", error);
          return null;
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await dbConnect();
      if (account?.provider === "github" || account?.provider === "google") {
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          // Create a new user if not found
          const newUser = new User({
            fullName: user.name || "Default Name",
            dob: "1970-01-01", // default date of birth
            gender: "Not specified", // default gender
            contact: "0000000000", // default contact number
            email: user.email,
            userName: user.name, // use email prefix if name is not available
            password: "Not set", // no password for OAuth users
            primaryPhysicianName: "",
            medicalHistorySummary: "",
            symptomsDescription: "",
          });
          await newUser.save();
        }
      }
      return true;
    },
    async session({ session, token, user }) {
      await dbConnect();
      const dbUser = await User.findOne({ email: session?.user?.email });
      if (dbUser) {
        session.user = dbUser.toObject(); // Convert Mongoose document to plain JavaScript object
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
