import { useWindowSize as useWindowSizeHook } from "usehooks-ts";

export enum EBreakpoints {
  Tablet = 768,
  Desktop = 1024,
}

export const useWindowSize = () => {
  const { width = 0 } = useWindowSizeHook();

  const isMobile = width < EBreakpoints.Tablet;
  const isTablet = width >= EBreakpoints.Tablet && width < EBreakpoints.Desktop;
  const isDesktop = width >= EBreakpoints.Desktop;

  return { isMobile, isTablet, isDesktop };
};

export default useWindowSize;
