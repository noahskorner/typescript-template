declare global {
  interface ResponseMessage {
    message: string;
  }

  interface RequestUser {
    id: string;
    email: string;
    roles: Array<string>;
  }
}

export { RequestUser };
