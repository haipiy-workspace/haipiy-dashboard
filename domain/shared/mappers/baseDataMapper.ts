import { IApiResponseBase, IApiResponseBaseData } from "../services";

// eslint-disable-next-line import/prefer-default-export
export const getBaseData = <DataType>(
  baseData: IApiResponseBase<DataType>,
): IApiResponseBaseData => ({
  statusCode: baseData.status_code || 0,
  errorCode: baseData.error_code || null,
  message: baseData.message || "",
});
