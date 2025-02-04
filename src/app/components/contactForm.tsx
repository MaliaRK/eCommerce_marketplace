'use client'

import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { client } from '@/sanity/lib/client'
import Link from 'next/link'

type FormType = z.infer<typeof formSchema>;

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name must be at least 2  characters."
  }).max(50),
  lastName: z.string().min(1, {
    message: "Last name must be at least 2  characters."
  }).max(50),
  address: z.string().min(2, {
    message: "Address must be accurate."
  }).max(50),
  addressLine2: z.string().max(50).optional(),
  postalCode: z.string().min(2).max(12),
  locality: z.string(),
  state: z.string(),
  country: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().min(11).max(15),
})

const ContactForm = () => {

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: FormType) {
    client.create({
      _type: "contactForm",
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      addressLine2: values.addressLine2,
      postalCode: values.postalCode,
      locality: values.locality,
      state: values.state,
      country: values.country,
      email: values.email,
      phoneNumber: values.phoneNumber,
    })
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} className='my-4 border-[#cccccc] border-[1px] outline-none py-2 md:py-1 pl-1 md:pr-36 rounded-md' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} className='my-4 border-[#cccccc] border-[1px] outline-none py-2 md:py-1 pl-1 md:pr-36 rounded-md' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Address Line 1" {...field} className='my-4 border-[#cccccc] border-[1px] outline-none py-2 md:py-1 pl-1 md:pr-36 rounded-md' />
                </FormControl>
                <FormDescription className='text-xs'>
                  we do not ship to P.O boxes
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Address</FormLabel> */}
                <FormControl>
                  <Input placeholder="Address Line 2 (optional)" {...field} className='my-4 border-[#cccccc] border-[1px] outline-none py-2 md:py-1 pl-1 md:pr-36 rounded-md' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input placeholder="1234" {...field} className='my-4 mr-4 border-[#cccccc] border-[1px] outline-none p-1 rounded-md' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="locality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Locality</FormLabel>
                <FormControl>
                  <Input placeholder="Karachi" {...field} className='my-4  border-[#cccccc] border-[1px] outline-none p-1 rounded-md' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="Sindh" {...field} className='my-4 mr-4 border-[#cccccc] border-[1px] outline-none p-1 rounded-md' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="Pakistan" {...field} className='my-4 border-[#cccccc] border-[1px] outline-none p-1 rounded-md' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p>◻ Save this address to my profile</p>
          <p className='my-4'>◻ Make this my preferred address</p>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="abc@gmail.com" {...field} className='my-4 border-[#cccccc] border-[1px] outline-none py-2 md:py-1 pl-1 md:pr-36 rounded-md' />
                </FormControl>
                <FormDescription>A confirmation email will be sent after checkout</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+92" {...field} className='my-4 border-[#cccccc] border-[1px] outline-none py-2 md:py-1 pl-1 md:pr-36 rounded-md' />
                </FormControl>
                <FormDescription>A carrier might contact you to confirm delivery.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className='mt-10'>◻ I have read and consent to aShopWorld processing my information
            in accordance with the <u>Privacy Statement</u> and <u>Cookie Policy</u>. eShopWorld
            is a trusted Nike partner. </p>
          <Link href={'/payment'}><Button type="submit" className='px-16 md:px-32 py-1 md:mx-4 my-6 rounded-full'>Continue</Button></Link>
          <hr />
        </form>
      </Form>
    </div>
  )
}

export default ContactForm;
