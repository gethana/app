"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "wouter";

import Sidebar from "../components/Sidebar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema: any = z
  .object({
    username: z
      .string()
      .min(1, {
        message: "Username is required",
      })
      .regex(/^[a-z0-9_-]{3,16}$/i),
    email: z
      .string()
      .min(1, {
        message: "Email is required",
      })
      .email(),
    password: z
      .string()
      .min(1, {
        message: "Password is required",
      })
      .regex(/^[a-z0-9_-]{6,18}$/i),
    confirmPassword: z
      .string()
      .min(1, {
        message: "Confirm password is required",
      })
      .regex(/^[a-z0-9_-]{6,18}$/i),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="grid place-content-center text-center flex flex-col p-5 flex-grow">
        <h1 className="text-4xl font-bold text-white">Register</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-4 text-start mt-5"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field: username }) => (
                <FormItem>
                  <FormLabel className="text-neutral-500 text-white">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-neutral-950 text-white text-sm"
                      {...username}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field: email }) => (
                <FormItem>
                  <FormLabel className="text-neutral-500 text-white">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-neutral-950 text-white text-sm"
                      {...email}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field: password }) => (
                <FormItem>
                  <FormLabel className="text-neutral-500 text-white">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="bg-neutral-950 text-white text-sm"
                      {...password}
                    />
                  </FormControl>
                  <FormDescription className="text-neutral-400">
                    Password must be at least 6 characters long
                  </FormDescription>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field: confirmPassword }) => (
                <FormItem>
                  <FormLabel className="text-neutral-500 text-white">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="bg-neutral-950 text-white text-sm"
                      {...confirmPassword}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <Button className="self-end w-full" variant="outline" type="submit">
              Submit
            </Button>

            <p className="text-white">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                {" "}
                Login
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Register;
