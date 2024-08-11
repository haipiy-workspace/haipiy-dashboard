import { ComponentType, lazy, Suspense } from "react";

export type IconName =
  | "calendar"
  | "watch"
  | "error"
  | "haipiy"
  | "invte"
  | "mine"
  | "shopr"
  | "lingoloom";

export interface IIconProps {
  name?: IconName;
  className?: string;
}

const Icon = ({ name = "error", className }: IIconProps) => {
  let IconComponent: ComponentType<{ className?: string }>;

  switch (name) {
    // icon resource
    case "calendar":
      IconComponent = lazy(() => import("@mui/icons-material/CalendarToday"));
      break;
    case "watch":
      IconComponent = lazy(() => import("@mui/icons-material/WatchLater"));
      break;
    // logo or svg resource
    case "haipiy":
      IconComponent = lazy(
        () => import("@/domain/shared/assets/svg/haipiy.svg"),
      );
      break;
    case "invte":
      IconComponent = lazy(
        () => import("@/domain/shared/assets/svg/invte.svg"),
      );
      break;
    case "mine":
      IconComponent = lazy(() => import("@/domain/shared/assets/svg/mine.svg"));
      break;
    case "shopr":
      IconComponent = lazy(
        () => import("@/domain/shared/assets/svg/shopr.svg"),
      );
      break;
    case "lingoloom":
      IconComponent = lazy(
        () => import("@/domain/shared/assets/svg/lingoloom.svg"),
      );
      break;
    default:
      IconComponent = lazy(() => import("@mui/icons-material/Error"));
  }

  return (
    // need to add default icon if faild to load
    <Suspense fallback={<div>Loading...</div>}>
      <IconComponent className={className} />
    </Suspense>
  );
};

export default Icon;
