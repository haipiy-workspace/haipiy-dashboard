import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { getBaseData } from "@/domain/shared/mappers";
import { CustomApiServiceError } from "@/domain/shared/services";
import { registerAccount } from "../services/api";

export const registerSchema = z
  .object({
    email: z.string().email(),
    name: z.string().min(3),
    username: z.string().min(20),
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
    terms: z.boolean().refine((value) => value === true, {
      message: "You must agree to the terms.",
    }),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type TFormRegister = z.infer<typeof registerSchema>;

export const useRegister = () => {
  const formMethod = useForm<TFormRegister>({
    defaultValues: {
      terms: false,
    },
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });
  const { control } = formMethod;

  const handleRegisterAccount: SubmitHandler<TFormRegister> = async (data) => {
    try {
      const response = await registerAccount({
        email: data.email,
        full_name: data.name,
        user_name: data.username,
        password: data.password,
      });

      const baseData = getBaseData(response);

      if (baseData.statusCode !== 200) {
        throw new CustomApiServiceError(
          `error code ${baseData.errorCode}, status code ${baseData.statusCode}, message ${baseData.message} on useRegister level`,
          "Error",
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { handleRegisterAccount, formMethod, control };
};
