interface eventSignUpFormBody {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
}

// use this function to validate your form
export default (eventSignUpFormBody: eventSignUpFormBody, { ...snackbar }) => {
  const { firstName, lastName, email, company, role } = eventSignUpFormBody;
  const minimumLength: number = 2;
  const emailChecker = /^\S+@\S+\.\S+$/;

  if (firstName.length < minimumLength || lastName.length < minimumLength) {
    snackbar.setMessage('Please input your full name.');
    snackbar.setOpen(true);
    snackbar.setSeverity('info');
    return false;
  }

  if (!emailChecker.test(email)) {
    snackbar.setMessage('Please input a proper e-mail address.');
    snackbar.setOpen(true);
    snackbar.setSeverity('info');
    return false;
  }

  if (!company.length) {
    snackbar.setMessage('Please input a company.');
    snackbar.setOpen(true);
    snackbar.setSeverity('info');
    return false;
  }

  if (!role.length) {
    snackbar.setMessage('Please input a role.');
    snackbar.setOpen(true);
    snackbar.setSeverity('info');
    return false;
  }

  snackbar.setMessage('See you for the pancakes!');
  snackbar.setOpen(true);
  snackbar.setSeverity('success');

  return eventSignUpFormBody;
};
