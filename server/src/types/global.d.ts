declare global {
  interface ResponseMessage {
    message: string;
  }

  interface RequestUser {
    id: string;
    email: string;
    roles: string[];
  }
}

export { RequestUser };
