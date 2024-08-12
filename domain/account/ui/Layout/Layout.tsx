import { Icon } from "@/domain/shared/ui";

interface ILayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: ILayoutProps) => (
  <div className={`grid h-screen grid-cols-10 p-2 ${className}`}>
    <div className="col-span-4 flex h-screen flex-col items-center justify-center">
      {children}
    </div>
    <div className="col-span-6 flex flex-col justify-center rounded-2xl bg-login-gradient pl-[47px]">
      <h1 className="text-2xl text-black-100">
        Solusi simpel buat semua kebutuhan kamu!
      </h1>
      <div className="flexr-row flex gap-2">
        <Icon className="pt-3" name="invte" />
        <Icon className="pt-2" name="mine" />
        <Icon className="pt-2" name="shopr" />
        <Icon name="lingoloom" />
      </div>
    </div>
  </div>
);

export default Layout;
