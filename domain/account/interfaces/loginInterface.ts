import { IApiResponseBaseInterface } from "@/domain/shared/services";

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse
  extends IApiResponseBaseInterface<{
    session_token: string;
    session_token_expired_at: string;
    refresh_token: string;
    refresh_token_expired_at: string;
  }> {}

export interface ILoginData {
  sessionToken: string;
  sessionTokenExpiredAt: string;
  refreshToken: string;
  refreshTokenExpiredAt: string;
}
