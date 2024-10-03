import { apiService, IApiResponseBase } from "@/domain/shared/services";
import accountEndpoints from "../endpoints";
import { ICheckVerificationResponse, IResendEmailnVerificationResponse } from "../../interfaces";

export const checkVerificationAccount = async (email: string) => {
  const response = await apiService<ICheckVerificationResponse>(
    `${accountEndpoints.checkVerification}?email=${email}`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  return response;
};

export const resendEmailVerification = async (email: string) => {
  const response = await apiService<IResendEmailnVerificationResponse>(
    accountEndpoints.resendVerification,
    {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    },
  );

  return response;
};

export const verifyAccount = async (token: string) => {
  const response = await apiService<IApiResponseBase<null>>(accountEndpoints.verify, {
    method: "POST",
    body: JSON.stringify({
      verification_token: token,
    }),
  });

  return response;
};
