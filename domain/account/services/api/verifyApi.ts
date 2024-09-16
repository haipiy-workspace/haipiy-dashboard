import { apiService, CustomApiServiceError, IApiResponseBase } from "@/domain/shared/services";
import accountEndpoints from "../endpoints";
import { ICheckVerificationResponse } from "../../interfaces";

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

export const resendVerificationAccount = async (payload: any) => {
  try {
    const response = await apiService<IApiResponseBase<null>>(accountEndpoints.resendVerification, {
      method: "POST",
      body: JSON.stringify({
        ...payload,
      }),
    });

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
