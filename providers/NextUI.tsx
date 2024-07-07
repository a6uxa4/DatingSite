"use client";

import { NextUIProvider as NextProviderUI } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useRouter } from "next/navigation";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function NextUIProvider({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  return (
    <NextProviderUI navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextProviderUI>
  );
}
