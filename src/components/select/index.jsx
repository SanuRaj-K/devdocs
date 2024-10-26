import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
       typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <FormControl sx={{ m: 1, width: 120,   height: 30 }}>
  <Select
  className=' bg-white'
    multiple
    displayEmpty
    value={personName}
    onChange={handleChange}
    input={<OutlinedInput />}
    renderValue={(selected) => {
      if (selected.length === 0) {
        return <em>None</em>;
      }
      return selected.join(', ');
    }}
    MenuProps={MenuProps}
    inputProps={{ 'aria-label': 'Without label' }}
    sx={{ height: 30 }} // Set height of Select to 30px
  >
    <MenuItem disabled value="">
      <em>Placeholder</em>
    </MenuItem>
    {names.map((name) => (
      <MenuItem
        key={name}
        value={name}
        style={getStyles(name, personName, theme)}
      >
        {name}
      </MenuItem>
    ))}
  </Select>
</FormControl>

  );
}