import { FieldNames } from "@/app/enums/field-name.enum";
import YupSettings from "@/configuration/yup.configuration";

export const CreatePostYupFormSchema = YupSettings.object().shape({
  [FieldNames.Title]: YupSettings.string().required(),
});
