import { AppRoutes } from "@/app/enums/app-route.enum";
import { PostsIcon } from "./partials/sidebar/icons/categories";
import { SidebarMenuProps } from "./types";

export const establishmentIconRoutes: AppRoutes[] = [
  AppRoutes.EstablishmentMain,
  AppRoutes.EstablishmentAddress,
  AppRoutes.EstablishmentPaymentTypes,
  AppRoutes.EstablishmentDeliveryTimes,
  AppRoutes.EstablishmentDeliveryPrice,
  AppRoutes.EstablishmentDeliveryAreas,
  AppRoutes.EstablishmentIntegrations,
];

export const SidebarMenuOptions: SidebarMenuProps[] = [
  {
    label: "Blog",
    items: [
      {
        label: "Posts",
        path: AppRoutes.Posts,
        icon: <PostsIcon />,
      },
    ],
  },
];
