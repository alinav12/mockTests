const mockRequest = ({login, password}: {login: string; password: string}) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
    if (login == 'error' && password == 'error') reject('Request failed');
  });
};

export const userLogin = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  await mockRequest({login, password});
  // throw 'Custom error';
  return {
    token: 'qwerty123',
    email: 'qwerty@qwerty.wer',
  };
};

// export const userLogin = async (user: IUserLogin) => {
//   const response = await fetch(`${apiUrl}/user`, {
//     method: 'GET',
//   });
//   if (!response.ok) throw new Error('Something Went Wrong!!');
//   const usersList = await response.json();
//   const curUser = usersList.find((u: IUserRegister) => u.login == user.login);
//   //   console.log('curUser', curUser);
//   if (!curUser) throw new Error('Login is incorrect');
//   if (curUser.password != user.password)
//     throw new Error('Password is incorrect');
//   return curUser;
// };
