const white: string = '#FFFFFFF';
const phosphorGreen: string = '#38C463';

export const formStyles = {
  textField: {
    fontFamily: 'Arial',
    color: phosphorGreen,
  },
  dropDown: {
    color: phosphorGreen,
    backgroundColor: '#282C34',
  },
  button: {
    color: phosphorGreen,
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
        color: phosphorGreen,
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
        borderBottom: `2px solid ${phosphorGreen}`,
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
        borderBottom: `2px solid ${phosphorGreen}`,
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
      color: phosphorGreen,
      marginTop: '8px',
    },
  },
};
