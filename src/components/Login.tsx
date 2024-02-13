"use client";

import React from "react";
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
import Link from "next/link";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "@/graphql/actions/login.action";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { CurrentUser } from "@/utils/network";

type Props = {
  onSetAccountHandelerFunction: boolean;
};

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type LoginSchema = z.infer<typeof formSchema>;

const Login = () => {
  const router = useRouter();
  const [loginUser, { loading }] = useMutation(LOGIN_USER);
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
    try {
      const loginData = {
        email: data.email,
        password: data.password,
      };

      const response = await axios.get(CurrentUser);
      // const jsonData = await response.json();

      console.log(response);
      // Handle the error, display a message to the user, or retry the request.

      const res = await loginUser({
        variables: loginData,
      });
      console.log(res);
      if (res.data.loginUser.error) {
        toast.error(res.data.loginUser.error.message);
      }
      toast.success("Login successful");
      Cookies.set("refresh_token", res.data.loginUser.refreshToken);
      Cookies.set("access_token", res.data.loginUser.accessToken);

      // save the user token
      // localStorage.setItem('accessToken', res.data.loginUser.accessToken)
      // localStorage.setItem('refreshToken', res.data.loginUser.refreshToken)

      router.push("/najncankqiu0933u988687?9u8&");
      reset();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Card className="w-[350px] md:w-[450px]">
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
            <Button
              className="w-full"
              type="submit"
              disabled={isSubmitting || loading}
            >
              Login
            </Button>
          </div>
          <div className="flex flex-row-reverse items-start justify-between w-full">
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
