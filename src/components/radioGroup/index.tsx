import * as React from "react";
import Radio from "@mui/material/Radio";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { IUserData } from "@/store";

interface Props {
  radioValue: string | undefined;
  label: string;
  handleSelect: (data: string) => void;
  userData: IUserData | undefined;
}

const RowRadioButtonsGroup = (Props: Props) => {
  const { label, handleSelect, radioValue, userData } = Props;

  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    radioValue ?? "0"
  );

  useEffect(() => {
    setSelectedValue(radioValue || "0");
  }, [radioValue, userData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    handleSelect(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <>
      <Box
        sx={{
          display: { sm: "grid" },
          gridTemplateColumns: { sm: "80% 20%" },
        }}
      >
        <Box
          sx={{
            display: { sm: "flex" },
            alignItems: { sm: "center" },
            color: "#00000099",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          {label}
        </Box>
        <Box
          sx={{
            display: { sm: "flex" },
            justifyContent: { sm: "end" },
            textAlign: { xs: "center" },
          }}
        >
          <Radio
            {...controlProps("1")}
            sx={{
              "&.Mui-checked": {
                color: "#fc7703",
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default RowRadioButtonsGroup;
