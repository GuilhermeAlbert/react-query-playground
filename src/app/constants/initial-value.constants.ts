import { EnvironmentKeys } from "../enums/environment.enum";

export const InitialValues = Object.freeze({
  Name: String(EnvironmentKeys.TestUserName ?? "") ?? "",
  Email: String(EnvironmentKeys.TestUserEmail ?? "") ?? "",
  Password: String(EnvironmentKeys.TestUserPassword ?? "") ?? "",
});
