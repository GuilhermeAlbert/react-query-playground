import { useEffect, useRef, useState } from "react";
import { SidebarMenuOptions } from "../../constants";
import { SidebarMenuProps } from "../../types";
import { SidebarHeader } from "./header";
import { SidebarMenuItem } from "./menu-item";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const trigger: any = useRef(null);
  const sidebar: any = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState<any>(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;

      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;

      setSidebarOpen(false);
    };

    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;

      setSidebarOpen(false);
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);

    const appDocument: any = document;

    if (sidebarExpanded) {
      appDocument.querySelector("body").classList.add("sidebar-expanded");
    } else {
      appDocument.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div className="min-w-fit">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <SidebarHeader
          sidebarOpen={sidebarOpen}
          trigger={trigger}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Links */}
        <div className="space-y-8">
          {SidebarMenuOptions.map(
            (menuOption: SidebarMenuProps, index: number) => (
              <SidebarMenuItem
                key={index}
                menuOption={menuOption}
                setSidebarExpanded={setSidebarExpanded}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
