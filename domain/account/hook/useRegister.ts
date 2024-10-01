import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { ApiServiceError } from "@/domain/shared/services/apiServiceError";
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
  const [loading, setLoading] = useState(false);

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
      setLoading(true);

      await registerAccount({
        email: data.email,
        full_name: data.name,
        user_name: data.username,
        password: data.password,
      });

      toast.success("berhasil membuat akun");

      router.push(`/verify?email=${data.email}`);
    } catch (error) {
      if (!(error instanceof ApiServiceError)) return;

      if (error.data?.message?.includes("email or username already used")) {
        toast.error("email or username already used");
      }
    } finally {
      setLoading(false);
    }
  };

  return { handleRegisterAccount, formMethod, control, loading };
};
