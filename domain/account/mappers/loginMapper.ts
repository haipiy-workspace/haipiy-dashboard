import { ILoginData, ILoginResponse } from "../interfaces";

// eslint-disable-next-line import/prefer-default-export
export const getLoginData = (loginData: ILoginResponse): ILoginData => ({
  sessionToken: loginData.data?.session_token || "",
  sessionTokenExpiredAt: loginData.data?.session_token_expired_at || "",
  refreshToken: loginData.data?.refresh_token || "",
  refreshTokenExpiredAt: loginData.data?.refresh_token_expired_at || "",
});
