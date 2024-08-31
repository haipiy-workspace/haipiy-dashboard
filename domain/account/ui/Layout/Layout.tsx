import { ReactNode } from "react";
import LgInvte from "@/domain/shared/assets/svg/invte.svg";
import LgMine from "@/domain/shared/assets/svg/mine.svg";
import LgShopr from "@/domain/shared/assets/svg/shopr.svg";
import LgLingoLoom from "@/domain/shared/assets/svg/lingoloom.svg";
import LgHaipiy from "@/domain/shared/assets/svg/haipiy.svg";

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
    className={`relative flex h-screen flex-col bg-haip-gray-100 p-[5px] lg:static lg:mb-0 lg:grid lg:grid-cols-10 lg:bg-haip-black-100 lg:p-2 ${mainClassName}`}
  >
    <div
      className={`absolute left-0 right-0 flex h-screen w-full flex-col items-center gap-4 p-2 pt-[280px] lg:static lg:h-[98vh] ${childrenClassName}`}
    >
      {children}
      <LgHaipiy className="h-[45.68] w-[124px] self-center" />
    </div>
    <div
      className={`flex min-h-[454px] flex-col justify-center rounded-2xl bg-login-gradient pl-[17px] lg:col-span-6 lg:pl-[47px] ${bannerClassName}`}
    >
      <h1 className="headline-h2 font-normal text-haip-black-100">
        Solusi simpel <span className="block lg:hidden" /> buat semua kebutuhan kamu!
      </h1>
      <div className="flexr-row flex gap-2">
        <div className="w-[56px] lg:w-[91px]">
          <LgInvte className="h-full w-full" name="invte" />
        </div>
        <div className="w-[57px] lg:w-[91px]">
          <LgMine className="h-full w-full" name="mine" />
        </div>
        <div className="w-[77px] pt-2 lg:w-[122px]">
          <LgShopr className="h-full w-full" name="shopr" />
        </div>
        <div className="w-[115px] pt-1 lg:w-[184px] lg:pt-[3px]">
          <LgLingoLoom className="h-full w-full" name="lingoloom" />
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
