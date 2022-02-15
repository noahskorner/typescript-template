declare global {
  interface ErrorType {
    value?: string;
    msg: string;
    param?: string;
    location?: string;
  }

  interface RequestUser {
    id: string;
    email: string;
    roles: string[];
  }
}

export { ErrorType, RequestUser };
