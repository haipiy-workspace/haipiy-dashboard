"use client";

import { Button, TextInput } from "@/domain/shared/ui";
import Haipiy from "@/domain/shared/assets/svg/haipiy.svg";
import { useLogin } from "@/domain/account/hook";

export const LoginForm = () => {
  const { handleLogin, handleSubmit, register, emailError, passwordError } = useLogin();
  return (
    <div className="flex min-h-[369px] w-full max-w-[406px] flex-col gap-4">
      <div className="flex flex-col gap-4 rounded-[10px] bg-haip-black-100 p-[18px]">
        <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col">
          <h2 className="mb-4 text-[32px] font-normal leading-[38px]">Masuk</h2>
          <TextInput
            {...register("email")}
            label="Email"
            placeholder="Masukan email kamu"
            errorMessage={emailError}
            required
          />
          <TextInput
            {...register("password")}
            label="Password"
            placeholder="Masukan password kamu"
            errorMessage={passwordError}
            required
          />
          <Button className="mt-4 w-full" type="submit">
            Login
          </Button>
        </form>
        <Button className="w-full" variant="outline">
          Register
        </Button>
      </div>
      <Haipiy className="h-[45.68] w-[124px] self-center" />
    </div>
  );
};

export default LoginForm;
