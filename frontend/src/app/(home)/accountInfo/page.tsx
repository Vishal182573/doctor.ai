'use client';

import { z } from 'zod';
import { useRouter } from 'next/navigation';
import {User} from '../../../../global/types'
import { useEffect, useState } from 'react';
import { signIn,useSession } from 'next-auth/react';
import axios from 'axios';
import { BACKEND_URL } from '../../../../global/constants';

export default function AccountInfo() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn(undefined, { callbackUrl: '/' });
    },
  });
  const router = useRouter();
  const [user,setUser] = useState<User> ()

  useEffect(()=>{
    const getUser = async()=>{
      try{
        const response = await axios.get(`${BACKEND_URL}/api/user/getUserByEmail/?email=${session?.user?.email}`)
        if(response.status==201){
          setUser(response.data);
        }
        else {
          alert("Currently Unavailable to fetch user");
        }
      }catch(err:any){
        console.log("Error",err.message)
      }
    };
    getUser();
  },[session])

  return (
    <section className="w-full p-3 pb-36 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold mb-2">Account Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600">Full Name</p>
              <p className="text-lg">{user?.fullName}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600">Date of Birth</p>
              <p className="text-lg">{user?.dob}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600">Gender</p>
              <p className="text-lg">{user?.gender}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600">Contact Number</p>
              <p className="text-lg">{user?.contact}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600">Email</p>
              <p className="text-lg">{user?.email}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600">Username</p>
              <p className="text-lg">{user?.userName}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600">Primary Physician Name</p>
              <p className="text-lg">{user?.primaryPhysicianName || "-"}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600">Medical History Summary</p>
              <p className="text-lg">{user?.medicalHistorySummary || "-"}</p>
            </div>
            <div className="mb-4 col-span-2">
              <p className="text-sm font-semibold text-gray-600">Symptoms Description</p>
              <p className="text-lg">{user?.symptomsDescription || "-"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
