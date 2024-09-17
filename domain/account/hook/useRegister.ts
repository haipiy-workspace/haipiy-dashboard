import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { getBaseData } from "@/domain/shared/mappers";
import { CustomApiServiceError } from "@/domain/shared/services";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { registerAccount } from "../services/api";

export const registerSchema = z
  .object({
    email: z.string().email(),
    name: z.string().min(1, { message: "Wajib diisi" }),
    username: z.string().min(1, { message: "Wajib diisi" }),
    password: z.string().min(1, { message: "Wajib diisi" }),
    confirmPassword: z.string().min(1, { message: "Wajib diisi" }),
    terms: z.boolean().refine((value) => value === true, {
      message: "Wajib dipilih.",
    }),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

export type TFormRegister = z.infer<typeof registerSchema>;

export const useRegister = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const formMethod = useForm<TFormRegister>({
    defaultValues: {
      terms: false,
    },
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });
  const { control } = formMethod;

  const handleRegisterAccount: SubmitHandler<TFormRegister> = async (data) => {
    try {
      setIsLoading(true);
      const response = await registerAccount({
        email: data.email,
        full_name: data.name,
        user_name: data.username,
        password: data.password,
      });

      const baseData = getBaseData(response);

      if (baseData.statusCode !== 200) {
        if (baseData.message?.includes("email or username already used")) {
          toast.error("email or username already used");
        }

        throw new CustomApiServiceError(
          `error code ${baseData.errorCode}, status code ${baseData.statusCode}, message ${baseData.message} on useRegister level`,
          "Error",
        );
      }

      toast.success("berhasil membuat akun");

      router.push(`/verify?email=${data.email}`);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleRegisterAccount, formMethod, control, isLoading };
};
