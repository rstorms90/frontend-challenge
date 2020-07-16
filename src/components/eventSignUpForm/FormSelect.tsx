import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { formStyles } from './FormStyles/FormStyles';

interface Props {
  role: string;
  setRole: any;
  styles: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  dropDownStyles: formStyles.dropDown,
}));

const FormSelect: React.FC<Props> = ({ role, setRole }) => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleChange = (event: any) => {
    setRole(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="FormSelect">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Role</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={role}
          onChange={handleChange}
          required
          MenuProps={{ classes: { paper: classes.dropDownStyles } }}
        >
          <MenuItem value={'investor'}>Investor</MenuItem>
          <MenuItem value={'mentor'}>Mentor</MenuItem>
          <MenuItem value={'founder'}>Founder</MenuItem>
          <MenuItem value={'networkMember'}>Network Member</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FormSelect;
