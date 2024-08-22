import { UserRole } from "@prisma/client";

export interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
  };

export interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
  };
  
  export interface HeaderProps {
    label: string;
};

export interface BackButtonProps {
    href: string;
    label: string;
  };
  
  export interface FormErrorProps {
    message?: string;
  };

  
export interface FormSuccessProps {
    message?: string;
  };

export interface MiddlewareProps {
    req?: any
};

export interface ProtectedLayoutProps {
  children: React.ReactNode;
}


export interface LogoutButtonProps {
  children?: React.ReactNode;
};

export interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
};
