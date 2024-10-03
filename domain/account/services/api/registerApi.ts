import { apiService, IApiResponseBase } from "@/domain/shared/services";
import { IRegisterPayload } from "../../interfaces";
import accountEndpoints from "../endpoints";

export const registerAccount = async (payload: IRegisterPayload) => {
  const formData = new FormData();
  formData.append("email", payload.email);
  formData.append("full_name", payload.full_name);
  formData.append("user_name", payload.user_name);
  formData.append("password", payload.password);

  const response = await apiService<IApiResponseBase<null>>(accountEndpoints.register, {
    method: "POST",
    body: formData,
  });

  return response;
};

export default registerAccount;
