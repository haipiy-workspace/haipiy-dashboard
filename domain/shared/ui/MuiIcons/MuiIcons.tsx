import { lazy, Suspense } from "react";

export interface MuiIconsProps {
  name?: "calendar" | "watch" | "error";
}

const MuiIcons = ({ name = "error" }: MuiIconsProps) => {
  let IconComponent;

  switch (name) {
    case "calendar":
      IconComponent = lazy(() => import("@mui/icons-material/CalendarToday"));
      break;
    case "watch":
      IconComponent = lazy(() => import("@mui/icons-material/WatchLater"));
      break;
    default:
      IconComponent = lazy(() => import("@mui/icons-material/Error"));
  }

  return (
    // need to add default icon if faild to load
    <Suspense fallback={<div>Loading...</div>}>
      <IconComponent />
    </Suspense>
  );
};

export default MuiIcons;
