import { Location, NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "../link-group";
import { SidebarPageGroupHeader } from "../page-group-header";
import { SidebarMenuItemOptionProps } from "./types";

export const isActiveRoute = (routePath: string, currentPath: string) => {
  return routePath === currentPath;
};

export const includesActiveRoute = (
  routePaths: string[],
  currentPath: string
): boolean => {
  return routePaths.some((routePath) => currentPath.includes(routePath));
};

export function SidebarMenuItem({
  menuOption,
  setSidebarExpanded,
}: SidebarMenuItemOptionProps): JSX.Element {
  const location: Location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <SidebarPageGroupHeader title={menuOption.label} />

      <ul className="mt-3">
        {menuOption.items.map((menuItem, index) =>
          menuItem.subItems && menuItem.subItems.length > 0 ? (
            <SidebarLinkGroup
              activecondition={
                menuItem.iconRoutes
                  ? includesActiveRoute(menuItem.iconRoutes, pathname)
                  : isActiveRoute(menuItem.path, pathname)
              }
              key={index}
            >
              {(handleClick: () => void, open: any) => (
                <>
                  <a
                    href="#0"
                    className={`block text-slate-200 truncate transition duration-150 ${
                      isActiveRoute(menuItem.path, pathname)
                        ? "hover:text-slate-200"
                        : "hover:text-white"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick();
                      setSidebarExpanded(true);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {menuItem.icon}

                        <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          {menuItem.label}
                        </span>
                      </div>

                      {!!menuItem.subItems && (
                        <div className="flex shrink-0 ml-2">
                          <svg
                            className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                              open && "rotate-180"
                            }`}
                            viewBox="0 0 12 12"
                          >
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </a>

                  {!!menuItem.subItems && (
                    <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                      <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                        {menuItem.subItems?.map((subItem, index: number) => (
                          <li className="mb-1 last:mb-0" key={index}>
                            <NavLink
                              end
                              to={subItem.path}
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-[#50C878]"
                                  : "text-slate-400 hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                {subItem.label}
                              </span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </SidebarLinkGroup>
          ) : (
            <li
              key={index}
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                isActiveRoute(menuItem.path, pathname) && "bg-slate-900"
              }`}
            >
              <NavLink
                end
                to={menuItem.path}
                className={`block text-slate-200 truncate transition duration-150 ${
                  isActiveRoute(menuItem.path, pathname)
                    ? "hover:text-slate-200"
                    : "hover:text-white"
                }`}
              >
                <div className="flex items-center">
                  {menuItem.icon}

                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    {menuItem.label}
                  </span>
                </div>
              </NavLink>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
