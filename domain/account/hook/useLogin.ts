import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { cookie } from "@/domain/shared/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import dayjs from "dayjs";
import { ApiServiceError } from "@/domain/shared/services/apiServiceError";
import { login } from "../services/api";
import { getLoginData } from "../mappers";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type TFormLogin = z.infer<typeof loginSchema>;

export const useLogin = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const formMethod = useForm<TFormLogin>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });
  const { setError } = formMethod;

  const handleLogin: SubmitHandler<TFormLogin> = async (data) => {
    try {
      const response = await login({
        email: data.email,
        password: data.password,
      });

      const dataLogin = getLoginData(response);
      const cookieExpires = dayjs(dataLogin.sessionTokenExpiredAt).toDate();

      cookie.setToken(dataLogin.sessionToken, cookieExpires);
    } catch (error) {
      if (!(error instanceof ApiServiceError)) return;

      if (error.data?.errorCode === 1001) {
        setError("email", { message: "oops, email atau password salah." });
        setError("password", {
          message: "oops, email atau password salah.",
        });
      }
    }
  };

  return { handleLogin, formMethod, isShowPassword, setIsShowPassword };
};

export default useLogin;
