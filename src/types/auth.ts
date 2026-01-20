export type RegisterInput = {
  name: string;
  username: string;
  password: string;
};

export type RegisterResponse = {
  message: string;
  data: {
    id: number;
    name: string;
    username: string;
  };
  accessToken: string;
};
