"use client";

import { Button, Checkbox, TextInput } from "@/domain/shared/ui";
import { Controller } from "react-hook-form";
import { useRegister } from "../../hook";

export const RegisterForm = () => {
  const { handleRegisterAccount, formMethod, control } = useRegister();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = formMethod;

  return (
    <div className="flex min-h-[369px] w-full max-w-[406px] flex-col rounded-[10px] bg-haip-black-100 p-[18px]">
      <form onSubmit={handleSubmit(handleRegisterAccount)} className="flex flex-col">
        <h2 className="mb-4 text-[32px] font-normal leading-[38px]">Daftar</h2>
        <TextInput
          {...register("email", {
            required: "wajib diisi",
          })}
          required
          label="Email"
          placeholder="Masukan Email Kamu"
          errorMessage={errors.email?.message}
        />
        <TextInput
          {...register("name", {
            required: "wajib diisi",
          })}
          required
          label="Nama"
          placeholder="Masukan Nama Kamu"
          errorMessage={errors.name?.message}
        />
        <TextInput
          {...register("username", {
            required: "wajib diisi",
          })}
          required
          label="Username"
          placeholder="Masukan Username Kamu"
          errorMessage={errors.username?.message}
        />
        <TextInput
          {...register("password", {
            required: "wajib diisi",
          })}
          required
          label="Password"
          placeholder="Masukan Password Kamu"
          errorMessage={errors.password?.message}
        />
        <TextInput
          {...register("confirmPassword", {
            required: "wajib diisi",
          })}
          required
          label="Konfirmasi Password"
          placeholder="Konfirmasi Password Kamu"
          errorMessage={errors.confirmPassword?.message}
        />
        <Controller
          name="terms"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Checkbox
              {...field}
              id="terms"
              checked={!!field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              className="text-haip-primary-500"
              label={
                <p className="body-b2">
                  Saya mengerti dan setuju dengan{" "}
                  <span className="text-haip-primary-500">Syarat dan Ketentuan</span> serta{" "}
                  <span className="text-haip-primary-500">Kebijakan Privasi.</span>
                </p>
              }
            />
          )}
        />

        <Button className="button-large mt-4 w-full" type="submit" disabled={!isValid}>
          Daftar
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
