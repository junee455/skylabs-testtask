export interface LoginRequestData {
  email: string;
  password: string;
  captcha: string;
}

export interface LoginResponseData {
  status: true;
  result: UserInfo;
}

export interface UserInfo {
  email: string;
  firstName: string;
  tfa: 'disabled';
  token: '62419f-b68ff1b7-a5d8-4d5d-b95a-9fbf157acb66-6bc406f959af1b4820';
  role: 'user';
  firstLogin: false;
  TFAEnabled: false;
  userId: '617a5d91631d00e5609fd0f7';
  lang: 'en';
}
