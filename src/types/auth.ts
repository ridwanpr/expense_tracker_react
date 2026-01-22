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

export type LoginInput = {
  username: string;
  password: string;
};

export type LoginResponse = {
  message: string;
  data: {
    id: number;
    name: string;
    username: string;
  };
  accessToken: string;
};
