"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type Props = {};

const formSchema = z.object({
  email: z.string().email(),
});

type ForgotPasswordSchema = z.infer<typeof formSchema>;

const ForgotPassword = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ForgotPasswordSchema) => {};

  return (
    <Card className="w-[350px] md:w-[450px]">
      <CardHeader>
        <CardTitle className="text-center">Forgot Password</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Enter your Email</Label>
              <Input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="w-full flex flex-col">
          <div className="w-full">
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </div>
          <div className="w-full flex justify-end mt-5">
            <Link href="/login" className="text-sm hover:text-blue-500">
              Go Back to Login
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ForgotPassword;
