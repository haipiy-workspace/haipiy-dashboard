import { Button, Icon, TextInput } from "@/domain/shared/ui";

const LoginForm = () => (
  <div className="flex min-h-[369px] min-w-[406px] max-w-[406px] flex-col gap-4 p-[18px]">
    <h2 className="text-[32px] font-normal leading-[38px]">Masuk</h2>
    <TextInput label="Email" placeholder="Masukan email kamu" required />
    <TextInput label="Password" placeholder="Masukan password kamu" required />
    <Button className="w-full">Login</Button>
    <Button className="w-full" variant="outline">
      Register
    </Button>
    <Icon name="haipiy" className="h-[45.68] w-[124px] self-center" />
  </div>
);

export default LoginForm;
