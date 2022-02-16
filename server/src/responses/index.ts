const emailNotVerified: ErrorType[] = [
  {
    msg: "Please verify your email before logging in.",
  },
];
const userNotFound: ErrorType[] = [
  {
    msg: "Your email or password is incorrect",
  },
];
const resetPassword: ErrorType[] = [
  {
    msg: "If a user with that email exists, you will recieve a email with instructions to reset your password.",
  },
];

export { emailNotVerified, userNotFound, resetPassword };
