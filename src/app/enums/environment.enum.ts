export enum EnvironmentKeys {
  ApiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080",

  EncryptStorageSecretKey = import.meta.env.VITE_ENCRYPT_STORAGE_SECRET_KEY ??
    "encrypt_storage_secret_key",

  AppLocale = import.meta.env.VITE_LOCALE ?? "pt-BR",
  AppFallbackLocale = import.meta.env.VITE_FALLBACK_LOCALE ?? "pt-BR",

  TestUserName = import.meta.env.VITE_TEST_USER_NAME,
  TestUserEmail = import.meta.env.VITE_TEST_USER_EMAIL,
  TestUserPassword = import.meta.env.VITE_TEST_USER_PASSWORD,

  MixPanelToken = import.meta.env.VITE_MIXPANEL_TOKEN,
}
