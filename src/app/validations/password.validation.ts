import { translate } from "@/configuration/i18n.configuration";
import YupSettings from "@/configuration/yup.configuration";

export const YupSchemaDefaultPasswordValidation: YupSettings.StringSchema<
  string,
  YupSettings.AnyObject,
  undefined,
  ""
> = YupSettings.string()
  .required()
  .min(8, `${translate("validation.number_of_characters_must_be_more_than")} 8`)
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-={}:'"|,.<>?]+/,
    translate("validation.your_password_must_have_a_letter_and_a_number")
  );
