import { ComponentType, lazy, Suspense } from "react";

export interface IIconProps {
  name?: "calendar" | "watch" | "error" | "haipiy";
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
        () => import("@/domain/shared/assets/icons/logo.svg"),
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
