import { apiService, CustomApiServiceError, IApiResponseBase } from "@/domain/shared/services";
import accountEndpoints from "../endpoints";
import { ICheckVerificationResponse, IResendEmailnVerificationResponse } from "../../interfaces";

export const checkVerificationAccount = async (email: string) => {
  try {
    const response = await apiService<ICheckVerificationResponse>(
      `${accountEndpoints.checkVerification}?email=${email}`,
      {
        method: "GET",
        cache: "no-store",
      },
    );

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new CustomApiServiceError(`${error.message}, on checkVerifiation function`, error.name);
    }
    throw new CustomApiServiceError(
      "Unknown error occurred on checkVerifiation function",
      "UnknownError",
    );
  }
};

export const resendEmailVerification = async (email: string) => {
  try {
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new CustomApiServiceError(
        `${error.message}, on resendEmailVerification function`,
        error.name,
      );
    }
    throw new CustomApiServiceError(
      "Unknown error occurred on checkVerifiation function",
      "UnknownError",
    );
  }
};

export const verifyAccount = async (token: string) => {
  try {
    const response = await apiService<IApiResponseBase<null>>(accountEndpoints.verify, {
      method: "POST",
      body: JSON.stringify({
        verification_token: token,
      }),
    });

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new CustomApiServiceError(`${error.message}, on verifyAccount function`, error.name);
    }
    throw new CustomApiServiceError(
      "Unknown error occurred on checkVerifiation function",
      "UnknownError",
    );
  }
};
