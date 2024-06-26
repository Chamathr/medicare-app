import * as React from "react";
import Radio from "@mui/material/Radio";
import { Avatar, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { IUserData } from "@/store";
import { getScoreValue } from "@/utils/report";

interface Props {
  radioValue: string | undefined;
  label: string;
  handleSelect: (data: string) => void;
  userData: IUserData | undefined;
  index: number;
}

const RowRadioButtonsGroup = (Props: Props) => {
  const { label, handleSelect, radioValue, userData, index } = Props;

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
        <Box display={"flex"}>
          <Box
            sx={{
              display: { sm: "flex" },
              alignItems: { sm: "center" },
            }}
          >
            <Avatar sx={{ bgcolor: "#ffcc00", zoom: 0.6 }} variant="circular">
              {getScoreValue(index)}
            </Avatar>
          </Box>
          <Box
            sx={{
              ml: 2,
              display: { sm: "flex" },
              alignItems: { sm: "center" },
              color: "#00000099",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            {label}
          </Box>
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
                color: "#ffcc00",
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default RowRadioButtonsGroup;
