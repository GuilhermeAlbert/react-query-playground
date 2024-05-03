import { EncryptStorage } from "encrypt-storage";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { StorageKeys } from "../app/enums/storage.enum";
import English from "../resources/locales/locales/en-us.locale";
import Portuguese from "../resources/locales/locales/pt-br.locale";
import { EnvironmentKeys } from "../app/enums/environment.enum";

/**
 * Obtém a internacionalização via preferências
 * @returns {string}
 */
const getLocale = (): string => {
  const encryptStorage = new EncryptStorage(
    String(EnvironmentKeys.EncryptStorageSecretKey)
  );
  const loadedLocale: string | undefined = encryptStorage.getItem(
    StorageKeys.Locale
  );

  if (loadedLocale) {
    return loadedLocale || String(EnvironmentKeys.AppLocale);
  }

  return String(EnvironmentKeys.AppLocale);
};

/**
 * @var initReactI18next
 */
i18n.use(initReactI18next).init({
  resources: {
    en: English,
    "en-US": English,
    pt: Portuguese,
    "pt-BR": Portuguese,
  },

  lng: getLocale(),
  fallbackLng: String(EnvironmentKeys.AppFallbackLocale),

  interpolation: {
    escapeValue: false,
  },
});

export const translate = (key: any) => i18n.t(key);
