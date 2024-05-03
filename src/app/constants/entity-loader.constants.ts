import { CacheMillisecondExpirations } from "../enums/cache-expiration.enum";
import { FieldNames } from "../enums/field-name.enum";
import { StorageKeys } from "../enums/storage.enum";
import { UseEntityLoaderProps } from "../hooks/entity-loader.hook";
import {
  getEstablishmentPosts,
  getEstablishmentFoodRestrictions,
  getEstablishmentPaymentMethods,
} from "../services/establishment.service";

const defaultSettings = {
  labelField: FieldNames.Title,
  valueField: FieldNames.Id,
  cacheExpiration: CacheMillisecondExpirations.TwentyFourHours,
};

export const PostEntityLoaderProps: UseEntityLoaderProps<any> = {
  fetchFunction: getEstablishmentPosts,
  cacheKey: StorageKeys.EstablishmentPosts,
  ...defaultSettings,
};

export const PaymentMethodEntityLoaderProps: UseEntityLoaderProps<any> = {
  fetchFunction: getEstablishmentPaymentMethods,
  cacheKey: StorageKeys.EstablishmentPaymentMethods,
  ...defaultSettings,
};

export const FoodRestrictionEntityLoaderProps: UseEntityLoaderProps<any> = {
  fetchFunction: getEstablishmentFoodRestrictions,
  cacheKey: StorageKeys.EstablishmentFoodRestrictions,
  ...defaultSettings,
};
