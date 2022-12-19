interface IUserLogin {
  login: string;
  password?: string;
  token?: string;
}

type UserState = {
  user: IUserLogin;
  loading: boolean;
  error: string;
};

type UserAction = {
  type: string;
  payload?: any;
  error?: string;
  response?: {token: string; email: string};
};

type DispatchType = (args: UserAction) => UserAction;
