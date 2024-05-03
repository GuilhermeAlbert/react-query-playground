import mixpanel from "mixpanel-browser";
import { useCallback } from "react";
import { EnvironmentKeys } from "../enums/environment.enum";
import { MixPanelEventNames } from "../enums/mixpanel.enum";

export function useMixPanelEvents() {
  const track = useCallback((eventName: MixPanelEventNames, params?: any) => {
    if (EnvironmentKeys.MixPanelToken) {
      mixpanel.track(eventName, params);
    }
  }, []);

  const setOnce = useCallback((params?: any) => {
    if (EnvironmentKeys.MixPanelToken) {
      mixpanel.people.set_once(params);
    }
  }, []);

  const set = useCallback((params?: any) => {
    if (EnvironmentKeys.MixPanelToken) {
      mixpanel.people(params);
    }
  }, []);

  return {
    track,
    set,
    setOnce,
  };
}
