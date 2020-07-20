// use this function to validate your form
interface eventSignUpFormBody {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
}

export default (eventSignUpFormBody: eventSignUpFormBody) => {
  const { firstName, lastName, email, company, role } = eventSignUpFormBody;
  const minimumLength: number = 2;
  const emailChecker = /^\S+@\S+\.\S+$/;

  if (firstName.length < minimumLength || lastName.length < minimumLength) {
    alert('Please input your full name.');
  }

  if (!emailChecker.test(email)) {
    alert('Please input a proper e-mail address.');
  }

  if (!company.length || !role.length) {
    alert('Please input a company and role.');
  }

  return eventSignUpFormBody;
};
