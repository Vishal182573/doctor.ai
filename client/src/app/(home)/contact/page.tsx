"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../../../../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form"
import { Input } from "../../../../components/ui/input"
import { Textarea } from "../../../../components/ui/textarea"
import { useRouter } from "next/navigation"


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string(),
  message:z.string().min(10, {
    message: "message must be at least 10 characters.",
  })
  .max(160),
})

export default function Contact() {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email:"",
      message:"",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Example of an asynchronous operation (e.g., sending data to a server)
      const response = await axios.post("http://localhost:3001/api/contact",values);
  
      if(response.status==201){
        alert('submitted successfully');
        // router.push("/landingPage")
      }
      else if(response.status==400){
        console.log("Enter Blank input")
      }
      else{
        alert('Failed to submit form. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
  
  return (
    <section className="flex justify-center items-center">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-96 flex flex-col shadow-xl p-8 rounded-md mt-10">
      <div className="font-bold text-3xl">Contact Me</div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="ex:-vishal" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email.id</FormLabel>
              <FormControl>
                <Input placeholder="ex:-vishal@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter your message</FormLabel>
              <FormControl>
                <Textarea className="resize-none" placeholder="ex:- I want to freelance you" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </section>
  )
}
