import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { cookie } from "@/domain/shared/utils";
import { CustomApiServiceError } from "@/domain/shared/services";
import { getBaseData } from "@/domain/shared/mappers";
import { login } from "../services/api";
import { getLoginData } from "../mappers";

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

      const dataLogin = getLoginData(response);
      const baseData = getBaseData(response);

      if (baseData.errorCode === 1001) {
        setEmailError("oops, email atau password salah.");
        setPasswordError("oops, email atau password salah.");
        throw new CustomApiServiceError(
          `error code ${baseData.errorCode}, status code ${baseData.statusCode}, message ${baseData.message} on useLogin level`,
          "Error",
        );
      }

      cookie.setToken(dataLogin.sessionToken);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return { handleLogin, register, handleSubmit, emailError, passwordError };
};

export default useLogin;
