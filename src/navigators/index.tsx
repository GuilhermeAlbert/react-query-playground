import { PrivateNavigator } from "./private";
import { MainNavigatorOptions } from "./types";

export function MainNavigator({}: MainNavigatorOptions): JSX.Element {
  return (
    <>
      <PrivateNavigator />
    </>
  );
}
