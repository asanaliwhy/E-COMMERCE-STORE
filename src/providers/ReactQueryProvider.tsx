"use client";
import { queryClient } from "@/lib/queryClient";
import {QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

interface ReactQueryProviderProps {
    children: ReactNode;
}

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}