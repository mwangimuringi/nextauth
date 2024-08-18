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
  