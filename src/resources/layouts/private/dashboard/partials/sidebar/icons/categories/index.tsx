import { Location, useLocation } from "react-router-dom";
import { isActiveRoute } from "../../menu-item";
import { AppRoutes } from "@/app/enums/app-route.enum";

const iconRoute: AppRoutes = AppRoutes.Posts;

export function PostsIcon(): JSX.Element {
  const location: Location = useLocation();
  const { pathname } = location;

  return (
    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
      <path
        className={`fill-current ${
          isActiveRoute(iconRoute, pathname)
            ? "text-[#3A7850]"
            : "text-slate-600"
        }`}
        d="M19 5h1v14h-2V7.414L5.707 19.707 5 19H4V5h2v11.586L18.293 4.293 19 5Z"
      />

      <path
        className={`fill-current ${
          isActiveRoute(iconRoute, pathname)
            ? "text-[#50C878]"
            : "text-slate-400"
        }`}
        d="M5 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM5 23a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
      />
    </svg>
  );
}
