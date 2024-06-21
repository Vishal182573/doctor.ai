'use client';

import { useEffect, useState } from 'react';
import { getProviders, signIn, ClientSafeProvider } from 'next-auth/react';
import { Button } from '../../../../components/ui/button';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import SignInForm from '../../../../components/forms/SignInForm';
import { useRouter } from 'next/navigation';
import { Separator } from '../../../../components/ui/separator';

export default function SignInPage() {
  const router = useRouter();
  const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const handleSignIn = (providerId: string) => {
    signIn(providerId, { callbackUrl: '/' }); // Redirect to the home page after sign in
  };

  if (!providers) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="space-y-4 w-[400px] flex flex-col shadow-xl p-8 rounded-md bg-white">
        <h1 className="font-bold text-3xl text-center">Login</h1>
        {providers['credentials'] && <SignInForm provider={providers['credentials']} />}
        <div>
          <div className="space-y-1 text-center">
            <p className="text-sm text-muted-foreground">Or Continue With</p>
          </div>
          <Separator />
        </div>
        <div className="flex space-x-4 justify-center">
          {providers['google'] && (
            <Button
              type="button"
              className="rounded-full"
              variant="destructive"
              onClick={() => handleSignIn(providers['google'].id)}
            >
              <FaGoogle className="2rem" />
            </Button>
          )}
          {providers['github'] && (
            <Button
              type="button"
              className="rounded-full bg-[#3d5a77] hover:bg-[#1a1e21] text-white"
              onClick={() => handleSignIn(providers['github'].id)}
            >
              <FaGithub className="2rem" />
            </Button>
          )}
        </div>
        <div className="text-center">
          <span className="text-gray-400">Don't have an account? </span>
          <button
            type="button"
            className="text-blue-500 hover:text-blue-700 font-bold"
            onClick={() => router.push("/auth/register")}
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
}
