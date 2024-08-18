"use client";

import React from "react";
import { Button } from "../ui/button";
import { BackButtonProps } from "@/types";
import Link from "next/link";

const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
