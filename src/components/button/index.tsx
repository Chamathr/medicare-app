import { Button, Card, createTheme, useTheme } from "@mui/material";
import type { SxProps } from "@mui/material";
import React from "react";
import type { ReactElement } from "react";

interface CardProps {
  children: React.ReactNode;
  sx?: SxProps;
  onClick: () => void;
}

export const MainButton = ({
  children,
  sx,
  ...props
}: CardProps): ReactElement => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      {...props}
      sx={{
        ...sx,
        background: "#00008B"
      }}
    >
      {children}
    </Button>
  );
};
