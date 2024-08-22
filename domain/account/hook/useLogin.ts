import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { ILoginData } from "../interfaces";
import { login } from "../services/api";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export type TFormLogin = z.infer<typeof loginSchema>;

export const useLogin = () => {
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const { register, handleSubmit } = useForm<TFormLogin>();

  const handleLogin: SubmitHandler<TFormLogin> = async (data) => {
    const resultLogin = loginSchema.safeParse(data);
    if (!resultLogin.success) {
      setEmailError(resultLogin.error?.format().email?._errors.join("") || "");
      setPasswordError(resultLogin.error?.format().password?._errors.join("") || "");
    }

    try {
      const response = await login({
        email: data.email,
        password: data.password,
      });
      const dataLogin: ILoginData = {
        sessionToken: response.data?.session_token || "",
        sessionTokenExpiredAt: response.data?.session_token_expired_at || "",
        refreshToken: response.data?.refresh_token || "",
        refreshTokenExpiredAt: response.data?.refresh_token_expired_at || "",
      };
      console.log("data", dataLogin);
    } catch (error) {
      console.log(error);
    }
  };

  return { handleLogin, register, handleSubmit, emailError, passwordError };
};

export default useLogin;
