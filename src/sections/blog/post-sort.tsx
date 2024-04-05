import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

interface Props {
  options: {
    value: string;
    label: string;
  }[];
  onSort?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PostSort({ options, onSort }: Props) {
  return (
    <TextField select size="small" value="latest" onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
