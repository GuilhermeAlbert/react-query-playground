import { PrivateLayoutProvider } from "@/resources/layouts/private/dashboard";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./constants";
import { PrivateNavigatorOptions } from "./types";

export function PrivateNavigator({}: PrivateNavigatorOptions): JSX.Element {
  return (
    <>
      <PrivateLayoutProvider>
        <Routes>
          {PrivateRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </PrivateLayoutProvider>
    </>
  );
}
