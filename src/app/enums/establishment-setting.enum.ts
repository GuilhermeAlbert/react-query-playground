import { AppRoutes } from "./app-route.enum";

export enum EstablishmentSettings {
  General = AppRoutes.EstablishmentMain,
  Address = AppRoutes.EstablishmentAddress,
  PaymentMethods = AppRoutes.EstablishmentPaymentTypes,
  DeliveryTimes = AppRoutes.EstablishmentDeliveryTimes,
  DeliveryPrice = AppRoutes.EstablishmentDeliveryPrice,
  DeliveryArea = AppRoutes.EstablishmentDeliveryAreas,
  Integrations = AppRoutes.EstablishmentIntegrations,
  Feedback = AppRoutes.EstablishmentFeedback,
}

export const settingsArray = Array.from(Object.values(EstablishmentSettings));
