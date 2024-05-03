import BrandingImage from "@/resources/assets/images/branding/positive-brand.svg";
import { NavLink } from "react-router-dom";

export function SidebarHeader({ sidebarOpen, trigger, setSidebarOpen }) {
  return (
    <div className="flex justify-between mb-10 pr-3 sm:px-2">
      <button
        ref={trigger}
        className="lg:hidden text-slate-500 hover:text-slate-400"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
      >
        <span className="sr-only">Close sidebar</span>
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
        </svg>
      </button>

      <NavLink end to="/" className="block">
        Panel
      </NavLink>
    </div>
  );
}
