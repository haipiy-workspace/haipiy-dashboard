import { ICheckVerificationResponse, ICheckVerificationData } from "../interfaces";

// eslint-disable-next-line import/prefer-default-export
export const getCheckVerificationtData = (
  checkVerificationData: ICheckVerificationResponse,
): ICheckVerificationData => ({
  resendTimeout: checkVerificationData.data?.resend_timeout || "",
  resendCountdown: checkVerificationData.data?.resend_countdown || 0,
  isAccountVerified: checkVerificationData.data?.is_account_verified || false,
});
