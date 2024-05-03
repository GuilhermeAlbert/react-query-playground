import { toast } from "react-toastify";
import { translate } from "./i18n.configuration";

export function dispatchSuccessToastMessage(message?: string) {
  toast.success(message ?? translate("validation.request_success"));
}

export function dispatchWarningToastMessage(message?: string) {
  toast.warning(message ?? translate("validation.request_error"));
}

export function dispatchErrorToastMessage(message?: string) {
  toast.error(message ?? translate("validation.request_error"));
}
