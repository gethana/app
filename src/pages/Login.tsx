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

const formSchema = z.object({
  username: z
    .string()
    .min(1, {
      message: "Username is required",
    })
    .regex(/^[a-z0-9_-]{3,16}$/i),
  password: z
    .string()
    .min(1, {
      message: "Password is required",
    })
    .regex(/^[a-z0-9_-]{6,18}$/i),
});

function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="grid place-content-center text-center flex flex-col p-5 flex-grow">
        <h1 className="text-4xl font-bold text-white">Login</h1>
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
                  <FormLabel className="text-neutral-500 text-white">Username</FormLabel>
                  <FormControl>
                    <Input className="bg-neutral-950 text-white text-sm" {...username} />
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
                  <FormLabel className="text-neutral-500 text-white">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="bg-neutral-950 text-white text-sm"
                      {...password}
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
              Don't have an account?{" "}
              <Link  href="/register" className="underline underline-offset-4">
                {" "}
                Register
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Login;
