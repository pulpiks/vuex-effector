export type User = {
  loggedIn: boolean;
  username: string;
  password: string;
}

export const userState: User = {
  loggedIn: false,
  username: '',
  password: ''
}
