import * as React from "react";
import { createTheme as createMuiTheme, Theme } from "@mui/material/styles";
import { Authentication, Session } from "../../types/IAuth";
import {
  BrandingContext,
  NavigationContext,
  RouterContext,
  UserDataContext,
  WindowContext,
} from "../../context/Context";
import AppThemeProvider from "./AppThemeProvider";
import { AppLayoutProviderProps } from "./ILayout";

export const AuthenticationContext = React.createContext<Authentication | null>(
  null,
);

export const SessionContext = React.createContext<Session | null>(null);

function createTheme(): Theme {
  return createMuiTheme({
    cssVariables: {
      colorSchemeSelector: "data-eworldes-template-color-scheme",
    },
    colorSchemes: { dark: true },
  });
}

const AppLayoutProvider = (props: AppLayoutProviderProps) => {
  const {
    children,
    theme = createTheme(),
    branding,
    userData,
    navigation = [],
    router = null,
    authentication = null,
    session = null,
    window: appWindow,
  } = props;

  return (
    <WindowContext.Provider value={appWindow}>
      <AuthenticationContext.Provider value={authentication}>
        <SessionContext.Provider value={session}>
          <RouterContext.Provider value={router}>
            <AppThemeProvider theme={theme} window={appWindow}>
              <BrandingContext.Provider value={branding}>
                <UserDataContext.Provider value={userData}>
                  <NavigationContext.Provider value={navigation}>
                    {children}
                  </NavigationContext.Provider>
                </UserDataContext.Provider>
              </BrandingContext.Provider>
            </AppThemeProvider>
          </RouterContext.Provider>
        </SessionContext.Provider>
      </AuthenticationContext.Provider>
    </WindowContext.Provider>
  );
};

export default AppLayoutProvider;
