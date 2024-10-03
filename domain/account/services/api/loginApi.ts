import { apiService } from "@/domain/shared/services";
import { ILoginPayload, ILoginResponse } from "../../interfaces";
import accountEndpoints from "../endpoints";

export const login = async (payload: ILoginPayload) => {
  const response = await apiService<ILoginResponse>(accountEndpoints.login, {
    method: "POST",
    body: JSON.stringify({
      ...payload,
    }),
  });
  return response;
};

export default login;
