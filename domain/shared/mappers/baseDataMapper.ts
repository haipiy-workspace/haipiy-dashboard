import { IApiResponseBase, IApiResponseBaseData } from "../services";

// eslint-disable-next-line import/prefer-default-export
export const getBaseData = (baseData: IApiResponseBase<{}>): IApiResponseBaseData => ({
  statusCode: baseData.status_code || 0,
  errorCode: baseData.error_code || null,
  message: baseData.message || "",
});
