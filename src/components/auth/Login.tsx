"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";

import { useRouter } from "next/navigation";
import { AdminLoginUrl } from "@/utils/network";
import useAxios from "@/hooks/useAxios";
import { SignInResponseType } from "@/utils/types";
import Link from "next/link";
import { auth_token, session_active } from "@/utils/constant";
import { ScaleSpinner } from "../loader";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type LoginSchema = z.infer<typeof formSchema>;

const Login = () => {
  const router = useRouter();
  const { axiosHandler } = useAxios(router);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    // Check if the user is already authenticated
    if (localStorage.getItem(auth_token)) {
      // If the access token exists, redirect to the dashboard
      router.replace("/dashboard");
    }
  }, [router]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(formSchema),
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = async (data: LoginSchema) => {
    setIsLoading(true);
    const loginData = {
      email: data.email,
      password: data.password,
    };

    const response = await axiosHandler<SignInResponseType, typeof loginData>(
      AdminLoginUrl,
      "post",
      loginData
    );

    if (response) {
      localStorage.setItem(auth_token, response.access_token);
      localStorage.removeItem(session_active);
      // redirect to dashboard
      router.replace("/dashboard");
    }

    reset();
    setIsLoading(false);
  };

  return (
    <Card className="w-[350px] md:w-[450px] max-md:w-[90%] max-md:h-[80%]">
      <CardHeader>
        <CardTitle className="text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Login to Staff Portal.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5 relative">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="off"
              />
              <div
                className="absolute top-1/2 right-3 items-center justify-center transform h-full flex -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="w-full flex flex-col">
          <div className="w-full">
            {isLoading ? (
              <ScaleSpinner />
            ) : (
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                Login
              </Button>
            )}
          </div>
          <div className="flex flex-row-reverse items-start justify-between w-full max-md:flex-col max-md:gap-20">
            <div className="w-full flex justify-end mt-5">
              <Link href="/forgot-password" className="text-sm">
                Forgot password?
              </Link>
            </div>
            <div className="w-full flex justify-start mt-5">
              <Link href="/signup" className="text-sm cursor-pointer">
                Register With us{" "}
              </Link>
            </div>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Login;
