export type RegisterDto = {
  name: string;
  email: string;
  password: string;
};

export type LoginDto = {
  email: string;
  password: string;
};

export type authResponse = {
  accessToken: string;
  id: string;
  name: string;
  email: string;
};
export type NameDto = {
  name: string
};

export type NameResponse = {
  id: string
  name: string
  email: string
}
