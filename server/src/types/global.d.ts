declare global {
  interface ResponseMessage {
    message: string;
  }

  interface RequestUser {
    id: string;
    email: string;
    roles: Array<string>;
  }

  enum RoleType {
    ADMIN = "ADMIN",
    SUPERADMIN = "SUPERADMIN",
  }
}

export { RequestUser, RoleType };
