// use this function to validate your form

export default (body: any) => {
  const { firstName, lastName, email, company, role } = body;

  if (
    !firstName.length ||
    !lastName.length ||
    !email.length ||
    !company.length ||
    !role.length
  ) {
    alert('Fields are required before submission.');
  }

  // return console.log(body);
};
