import { AppRoutes } from "@/app/enums/app-route.enum";

export interface PrivateLayoutProviderOptions {
  clean?: boolean;
  children: JSX.Element | JSX.Element[];
}

export interface SidebarMenuProps {
  label: string;
  items: SidebarMenuItemProps[];
}

export interface SidebarMenuItemProps {
  label: string;
  path: string;
  icon?: JSX.Element;
  subItems?: SidebarMenuItemProps[];
  iconRoutes?: AppRoutes[];
}
