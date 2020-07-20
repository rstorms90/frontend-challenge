const white = '#FFFFFFF';
const limeText = '#38C463';

export const formStyles = {
  textField: {
    fontFamily: 'Arial',
    color: limeText,
  },
  dropDown: {
    color: limeText,
    backgroundColor: '#282C34',
  },
  button: {
    color: limeText,
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
      paddingBottom: '15px',
    },
  },
  MuiInputLabel: {
    root: {
      color: white,
      '&$focused': {
        // increase the specificity for the pseudo class
        color: limeText,
      },
    },
  },
  MuiFilledInput: {
    root: {
      color: white,
    },
  },
  MuiFormLabel: {
    root: {
      color: white,
    },
  },
  MuiInputBase: {
    root: {
      borderBottom: `1px solid ${white}`,
    },
  },
  MuiSelect: {
    icon: {
      color: white,
    },
  },
};
