"use client";

import { CardWrapperProps } from "@/types";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Header } from "./header";

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
  }: CardWrapperProps) => {
    return (
      <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header label= {headerLabel}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
      </Card>
    );
  };