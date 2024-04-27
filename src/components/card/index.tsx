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
  return (
    <Card
      {...props}
      sx={{
        width: "100%",
        borderRadius: "5px",
        bgcolor: "rgba(255, 255, 255, 0.5)",
        boxShadow: "none",
        border: "1px solid #00008B",
        color: '#00008B',
        ...sx,
      }}
    >
      {children}
    </Card>
  );
};
