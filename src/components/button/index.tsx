import { Button } from "@mui/material";
import type { SxProps } from "@mui/material";
import React from "react";
import type { ReactElement } from "react";

interface CardProps {
  children: React.ReactNode;
  sx?: SxProps;
  type?: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  onClick?: () => void;
}

export const MainButton = ({
  children,
  sx,
  type,
  variant = "contained",
  ...props
}: CardProps): ReactElement => {
  return (
    <Button
      variant={variant}
      {...props}
      sx={{
        ...sx,
        background: "#fc7703",
      }}
    >
      {children}
    </Button>
  );
};
