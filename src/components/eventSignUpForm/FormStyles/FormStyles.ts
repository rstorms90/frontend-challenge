const white: string = '#FFFFFFF';
const lime: string = '#38C463';

export const formStyles = {
  textField: {
    fontFamily: 'Arial',
    color: lime,
  },
  dropDown: {
    color: lime,
    backgroundColor: '#282C34',
  },
  button: {
    color: lime,
    backgroundColor: '#24282E',
    padding: '10px 20px',
    fontWeight: 600,
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'spaceBetween',
  },
};

// Called in custom theme before app renders
export const overrideMaterialUIFormStyles = {
  MuiFormGroup: {
    root: {
      padding: '0 10px 15px 10px',
    },
  },
  MuiFormControl: {
    root: {
      width: '100%',
    },
  },
  MuiInputLabel: {
    root: {
      color: white,
      '&$focused': {
        // increase the specificity for the pseudo class
        color: lime,
      },
    },
  },
  MuiFilledInput: {
    root: {
      color: white,
    },
    input: {
      borderBottom: `1px solid white`,
    },
    underline: {
      '&::after': {
        borderBottom: `2px solid ${lime}`,
      },
    },
  },
  MuiInput: {
    root: {
      color: white,
    },
    input: {
      borderBottom: `1px solid white`,
    },
    underline: {
      '&::after': {
        borderBottom: `2px solid ${lime}`,
      },
    },
  },
  MuiFormLabel: {
    root: {
      color: white,
    },
  },
  MuiSelect: {
    icon: {
      color: 'white',
    },
    select: {
      color: lime,
    },
  },
};
