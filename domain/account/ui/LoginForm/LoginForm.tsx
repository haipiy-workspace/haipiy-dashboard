import { Button, TextInput } from "@/domain/shared/ui";
import Image from "next/image";
import Logo from "@/domain/shared/assets/icons/logo.svg";

const LoginForm = () => (
  <div className="flex flex-col gap-4 p-[18px]">
    <h2 className="text-[32px] font-normal leading-[38px]">Masuk</h2>
    <TextInput label="Email" placeholder="Masukan email kamu" required />
    <TextInput label="Password" placeholder="Masukan password kamu" required />
    <Button className="w-full">Login</Button>
    <Button className="w-full" variant="outline">
      Register
    </Button>
    <Image
      className="self-center"
      src={Logo}
      alt="Haipiy Logo"
      width={124}
      height={45.68}
    />
  </div>
);

export default LoginForm;
