"use client";

import { Button, TextInput } from "@/domain/shared/ui";
import { useLogin } from "@/domain/account/hook";
import IcVisibility from "@mui/icons-material/Visibility";
import Link from "next/link";

export const LoginForm = () => {
  const { handleLogin, formMethod, isShowPassword, setIsShowPassword, loading } = useLogin();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = formMethod;
  return (
    <div className="flex min-h-[369px] w-full max-w-[406px] flex-col gap-4 rounded-[10px] bg-haip-black-100 p-[18px]">
      <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col">
        <h2 className="mb-4 text-[32px] font-normal leading-[38px]">Masuk</h2>
        <TextInput
          {...register("email", {
            required: "wajib diisi",
          })}
          required
          label="Email"
          placeholder="Masukan email kamu"
          errorMessage={errors.email?.message}
        />
        <TextInput
          {...register("password", {
            required: "wajib diisi",
          })}
          required
          label="Password"
          placeholder="Masukan password kamu"
          showPassword={!!isShowPassword}
          errorMessage={errors.password?.message}
          iconEnd={
            <IcVisibility
              className="cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            />
          }
        />
        <Button className="button-large mt-4 w-full" type="submit" loading={loading}>
          Login
        </Button>
      </form>
      <Link href="/register" className="w-full">
        <Button className="w-full" variant="outline">
          Register
        </Button>
      </Link>
    </div>
  );
};

export default LoginForm;
