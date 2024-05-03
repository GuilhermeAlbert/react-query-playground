import { EnvironmentKeys } from "@/app/enums/environment.enum";
import { EncryptStorage } from "encrypt-storage";

export const encryptStorage: EncryptStorage = new EncryptStorage(
  String(EnvironmentKeys.EncryptStorageSecretKey)
);

export const setStorageItem = async (key: string, item: any): Promise<any> =>
  encryptStorage.setItem(key, item);

export const clearStorage = async (): Promise<any> => encryptStorage.clear();

export const getStorageItem = async (key: string): Promise<any> =>
  await encryptStorage.getItem(key);

export const removeStorageItem = async (key: string): Promise<any> =>
  encryptStorage.removeItem(key);

export const multiStorageRemove = (keys: Array<string>): void =>
  encryptStorage.removeMultipleItems(keys);
