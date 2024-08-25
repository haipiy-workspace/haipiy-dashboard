import { Icon } from "@/domain/shared/ui";
import { ReactNode } from "react";

interface ILayoutProps {
  children?: ReactNode;
  mainClassName?: string;
  childrenClassName?: string;
  bannerClassName?: string;
}

export const Layout = ({
  children,
  mainClassName,
  childrenClassName,
  bannerClassName,
}: ILayoutProps) => (
  <div
    className={`relative flex h-screen flex-col bg-haip-gray-100 p-[5px] lg:static lg:grid lg:grid-cols-10 lg:bg-haip-black-100 lg:p-2 ${mainClassName}`}
  >
    <div
      className={`absolute left-1/2 top-[520px] flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center p-2 lg:static lg:left-auto lg:top-auto lg:col-span-4 lg:h-[98vh] lg:transform-none ${childrenClassName}`}
    >
      {children}
    </div>
    <div
      className={`flex min-h-[454px] flex-col justify-center rounded-2xl bg-login-gradient pl-[17px] lg:col-span-6 lg:pl-[47px] ${bannerClassName}`}
    >
      <h1 className="headline-h2 font-normal text-haip-black-100">
        Solusi simpel <span className="block lg:hidden" /> buat semua kebutuhan kamu!
      </h1>
      <div className="flexr-row flex gap-2">
        <div className="w-[56px] lg:w-[91px]">
          <Icon className="h-full w-full" name="invte" />
        </div>
        <div className="w-[57px] lg:w-[91px]">
          <Icon className="h-full w-full" name="mine" />
        </div>
        <div className="w-[77px] pt-2 lg:w-[122px]">
          <Icon className="h-full w-full" name="shopr" />
        </div>
        <div className="w-[115px] pt-1 lg:w-[184px] lg:pt-[3px]">
          <Icon className="h-full w-full" name="lingoloom" />
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
