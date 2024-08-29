import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { cookie } from "@/domain/shared/utils";
import { CustomApiServiceError } from "@/domain/shared/services";
import { getBaseData } from "@/domain/shared/mappers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import dayjs from "dayjs";
import { login } from "../services/api";
import { getLoginData } from "../mappers";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
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
      const baseData = getBaseData(response);

      if (baseData.errorCode === 1001) {
        setError("email", { message: "oops, email atau password salah." });
        setError("password", {
          message: "oops, email atau password salah.",
        });
        throw new CustomApiServiceError(
          `error code ${baseData.errorCode}, status code ${baseData.statusCode}, message ${baseData.message} on useLogin level`,
          "Error",
        );
      }

      const cookieExpires = dayjs(dataLogin.sessionTokenExpiredAt).toDate();

      cookie.setToken(dataLogin.sessionToken, cookieExpires);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return { handleLogin, formMethod, isShowPassword, setIsShowPassword };
};

export default useLogin;
