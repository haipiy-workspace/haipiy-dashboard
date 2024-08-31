import { Button, TextInput } from "@/domain/shared/ui";

export const RegisterForm = () => (
    <div className="flex min-h-[369px] w-full max-w-[406px] flex-col rounded-[10px] bg-haip-black-100 p-[18px]">
      <form className="flex flex-col">
        <h2 className="mb-4 text-[32px] font-normal leading-[38px]">Daftar</h2>
        <TextInput
          //   {...register("email", {
          //     required: "wajib diisi",
          //   })}
          required
          label="Email"
          placeholder="Masukan Email Kamu"
          //   errorMessage={errors.email?.message}
        />
        <TextInput
          //   {...register("password", {
          //     required: "wajib diisi",
          //   })}
          required
          label="Nama"
          placeholder="Masukan Nama Kamu"
          //   errorMessage={errors.password?.message}
        />
        <TextInput
          //   {...register("password", {
          //     required: "wajib diisi",
          //   })}
          required
          label="Username"
          placeholder="Masukan Username Kamu"
          //   errorMessage={errors.password?.message}
        />
        <TextInput
          //   {...register("password", {
          //     required: "wajib diisi",
          //   })}
          required
          label="Password"
          placeholder="Masukan Password Kamu"
          //   errorMessage={errors.password?.message}
        />
        <TextInput
          //   {...register("password", {
          //     required: "wajib diisi",
          //   })}
          required
          label="Konfirmasi Password"
          placeholder="Konfirmasi Password Kamu"
          //   errorMessage={errors.password?.message}
        />
        <Button className="mt-4 w-full" type="submit">
          Login
        </Button>
      </form>
    </div>
  );

export default RegisterForm;
