import {
  createNavigator,
  useBackButtonIntegration,
  useNavigatorIntegration,
} from "@tma.js/react-router-integration";
import { useBackButton } from "@tma.js/sdk-react";
import { type FC, useMemo } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/themeProvider";
import { routes } from "@/navigation/routes";
import { BackButton } from "@/hooks/useBackButton";

export const App: FC = () => {
  const tmaNavigator = useMemo(createNavigator, []);
  const [location, navigator] = useNavigatorIntegration(tmaNavigator);
  const backButton = useBackButton();

  useBackButtonIntegration(tmaNavigator, backButton);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router location={location} navigator={navigator}>
        <BackButton />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
