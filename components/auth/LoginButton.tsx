"use client";

import { useRouter } from "next/navigation";
import { LoginButtonProps } from "@/types";


export const LoginButton = ({ children, mode = "redirect", asChild }: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    <span>
        TODO: Implement modal
    </span>
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};