import { IApiResponseBase } from "@/domain/shared/services";

export interface ICheckVerificationResponse
  extends IApiResponseBase<{
    resend_timeout: string;
    resend_countdown: number;
    is_account_verified: boolean;
  }> {}

export interface IResendEmailnVerificationResponse
  extends IApiResponseBase<{
    resend_timeout: string;
    resend_countdown: number;
  }> {}

export interface ICheckVerificationData {
  resendTimeout: string;
  resendCountdown: number;
  isAccountVerified: boolean;
}

export interface IResendEmailnVerificationData {
  resendTimeout: string;
  resendCountdown: number;
}
