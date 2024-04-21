import { Card, useTheme } from "@mui/material";
import type { SxProps } from "@mui/material";
import React from "react";
import type { ReactElement } from "react";

interface CardProps {
  children: React.ReactNode;
  sx?: SxProps;
}

export const SectionCard = ({
  children,
  sx,
  ...props
}: CardProps): ReactElement => {
  const theme = useTheme();

  return (
    <Card
      {...props}
      sx={{
        width: "100%",
        borderRadius: "6px",
        bgcolor: "rgba(255, 255, 255, 0.5)",
        boxShadow: "none",
        ...sx,
      }}
    >
      {children}
    </Card>
  );
};
