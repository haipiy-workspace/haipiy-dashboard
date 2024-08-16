import { Button, Icon, TextInput } from "@/domain/shared/ui";

export const LoginForm = () => (
  <div className="flex min-h-[369px] w-full max-w-[406px] flex-col gap-4">
    <div className="flex flex-col gap-4 rounded-[10px] bg-haip-black-100 p-[18px]">
      <h2 className="text-[32px] font-normal leading-[38px]">Masuk</h2>
      <TextInput label="Email" placeholder="Masukan email kamu" required />
      <TextInput
        label="Password"
        placeholder="Masukan password kamu"
        required
      />
      <Button className="w-full">Login</Button>
      <Button className="w-full" variant="outline">
        Register
      </Button>
    </div>
    <Icon name="haipiy" className="h-[45.68] w-[124px] self-center" />
  </div>
);

export default LoginForm;
