import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

import { routes } from "@/router/router.routes";
import { AppLayout } from "@/layouts";
import { NotFoundPage } from "@/pages";
import { IS_FIRST_TIME } from "./constants/config";
import paths from "./router/router.paths";

function App() {
  const isFirstTimeUser = localStorage.getItem(IS_FIRST_TIME);
  console.log(isFirstTimeUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {isFirstTimeUser !== undefined && isFirstTimeUser === "false" && (
            <Route
              path={paths.PATH_ONBOARDING}
              element={<Navigate replace to={paths.PATH_HOME} />}
            />
          )}
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
