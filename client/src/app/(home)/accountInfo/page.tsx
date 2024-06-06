"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs"

export default function accountInfo() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>

    </div>
  );
}

