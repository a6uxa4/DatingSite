"use client";

import { NextUIProvider as NextProviderUI } from "@nextui-org/system";
import { useRouter } from "next/navigation";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function NextUIProvider({ children }: ProvidersProps) {
  const router = useRouter();
  return <NextProviderUI navigate={router.push}>{children}</NextProviderUI>;
}
