"use client";

import axios from "axios";
import { toast } from "sonner";
import { auth_token, session_active } from "@/utils/constant";
import { HandleLogOut } from "./useLogout";

export default function useAxios() {
  //   const { handleLogOut: logout } = useLogout();
  async function axiosHandler<T, D = unknown>(
    url: string,
    method: string,
    data?: D,
    isAuthorized?: boolean
  ): Promise<T | null> {
    const token =
      typeof localStorage !== "undefined"
        ? localStorage.getItem(auth_token)
        : null;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const config = {
      headers: isAuthorized ? headers : {},
    };

    const result = await axios<T>({
      method: method,
      url: url,
      data: data,
      ...config,
    }).catch(err => {
      if (axios.isAxiosError(err) && err.response) {
        if (err.response.status === 401) {
          if (!localStorage.getItem(session_active)) {
            localStorage.setItem(session_active, "true");
            // Redirect to sign-in page
            toast.error("Session expired. Please sign in again.");
            HandleLogOut();
          }
        } else {
          const message =
            err.response.data.error ||
            "An error occurred while processing your request.";
          toast.error(`Error: ${message}`);
        }
      } else {
        // Handle non-Axios errors
        toast.error("An unexpected error occurred.");
      }
    });

    if (!result) {
      return null;
    }

    return result.data || (true as T);
  }

  return {
    axiosHandler,
  };
}
