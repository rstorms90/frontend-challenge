import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { formStyles } from './FormStyles/FormStyles';

interface Props {
  role: string;
  styles: object;
  handleChange: (e: handleChangeEvent, child: React.ReactNode) => void;
}

type handleChangeEvent = React.ChangeEvent<{
  name?: string | undefined;
  value: unknown;
}>;

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 130,
  },
  dropDownStyles: formStyles.dropDown,
}));

const FormSelect: React.FC<Props> = ({ role, handleChange }) => {
  const [open, setOpen] = useState<boolean>(false);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="FormSelect">
      <FormControl className={classes.formControl}>
        <InputLabel id="rol-open-select-label">Role</InputLabel>
        <Select
          name="role"
          labelId="rol-open-select-label"
          id="rol-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={role}
          onChange={handleChange}
          MenuProps={{ classes: { paper: classes.dropDownStyles } }}
        >
          <MenuItem value={'Investor'}>Investor</MenuItem>
          <MenuItem value={'Mentor'}>Mentor</MenuItem>
          <MenuItem value={'Founder'}>Founder</MenuItem>
          <MenuItem value={'Network Member'}>Network Member</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FormSelect;
