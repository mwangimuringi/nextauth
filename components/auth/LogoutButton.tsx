"use client";

import { logout } from "@/actions/logout";
import { LogoutButtonProps } from "@/types";

export const LogoutButton = ({
  children
}: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};