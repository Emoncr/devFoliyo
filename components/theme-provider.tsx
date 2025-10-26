"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import {
  SpacemanThemeProvider,
  ThemeAnimationType,
} from "@space-man/react-theme-animation";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <SpacemanThemeProvider
        defaultTheme="system"
        animationType={ThemeAnimationType.CIRCLE}
      >
        {children}
      </SpacemanThemeProvider>
    </NextThemesProvider>
  );
}
