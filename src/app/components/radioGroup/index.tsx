import * as React from "react";
import Radio from "@mui/material/Radio";
import { Box } from "@mui/material";
import { pink } from "@mui/material/colors";

interface Props {
  val: string;
  label: string;
  handleSelect: (data: string) => void;
}

const RowRadioButtonsGroup = (Props: Props) => {
  const { label, handleSelect, val } = Props;

  const [selectedValue, setSelectedValue] = React.useState(val);

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
          display: { sm: "flex" },
          justifyContent: { sm: "space-between" },
        }}
      >
        <Box sx={{ display: { sm: "flex" }, alignItems: { sm: "center" } }}>
          {label}
        </Box>
        <Box>
          <Radio
            {...controlProps("1")}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <Radio {...controlProps("2")} color="default" />
          <Radio {...controlProps("3")} color="success" />
          <Radio {...controlProps("4")} color="secondary" />
          <Radio {...controlProps("5")} />
        </Box>
      </Box>
    </>
  );
};

export default RowRadioButtonsGroup;
