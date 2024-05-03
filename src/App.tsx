import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Location, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryClient } from "./configuration/react-query.configuration";
import { MainNavigator } from "./navigators";
import "./resources/assets/css/style.css";

function App() {
  const location: Location = useLocation();

  /**
   * @returns {void}
   */
  useEffect((): void => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
      <QueryClientProvider client={ReactQueryClient}>
        <MainNavigator />
      </QueryClientProvider>

      <ToastContainer hideProgressBar closeButton={false} />
    </>
  );
}

export default App;
