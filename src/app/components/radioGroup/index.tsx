import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';

interface Props {
    label: string
}

const RowRadioButtonsGroup = (Props: Props) => {

    const { label } = Props

    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <Box sx={{ pl: { sm: 5} }}>
                    <FormControlLabel value="1" control={<Radio />} label="" />
                    <FormControlLabel value="2" control={<Radio />} label="" />
                    <FormControlLabel value="3" control={<Radio />} label="" />
                    <FormControlLabel value="4" control={<Radio />} label="" />
                    <FormControlLabel value="5" control={<Radio />} label="" />
                </Box>
            </RadioGroup>
        </FormControl>
    );
}

export default RowRadioButtonsGroup