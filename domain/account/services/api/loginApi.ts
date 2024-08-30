import { apiService, CustomApiServiceError } from "@/domain/shared/services";
import { ILoginPayload, ILoginResponse } from "../../interfaces";
import accountEndpoints from "../endpoints";

export const login = async (payload: ILoginPayload) => {
  try {
    const response = await apiService<ILoginResponse>(accountEndpoints.login, {
      method: "POST",
      body: JSON.stringify({
        ...payload,
      }),
    });
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new CustomApiServiceError(`${error.message}, on loginApi.ts level`, error.name);
    }
    throw new CustomApiServiceError("Unknown error occurred on loginApi.ts level", "UnknownError");
  }
};

export const register = async () => {};
