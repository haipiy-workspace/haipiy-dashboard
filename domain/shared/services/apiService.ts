import { dataTypeCheck } from "../utils";
import { IApiResponseBase, IApiResponseBaseData } from "./apiResponseInterface";
import { ApiServiceError } from "./apiServiceError";

const getBaseData = <DataType>(baseData: IApiResponseBase<DataType>): IApiResponseBaseData => ({
  statusCode: baseData.status_code || 0,
  errorCode: baseData.error_code || null,
  message: baseData.message || "",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const timeout = process.env.NEXT_PUBLIC_TIMEOUT ? Number(process.env.NEXT_PUBLIC_TIMEOUT) : 6000;

export const apiService = async <ResponseType>(
  endpoint: string,
  options?: RequestInit,
): Promise<ResponseType> => {
  const controller = new AbortController();
  const { signal } = controller;
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  const headers =
    options?.headers instanceof Headers ? options.headers : new Headers(options?.headers || {});

  // Only set Content-Type to application/json if it's not already set and if data type is json
  if (!headers.has("Content-Type") && dataTypeCheck.isJson(options?.body)) {
    headers.set("Content-Type", "application/json");
  }
  const response = await fetch(`${baseUrl}${endpoint}`, {
    signal,
    ...options,
    headers,
  });

  clearTimeout(timeoutId);

  const data = await response.json();
  const baseResponse = getBaseData(data);

  if (!response.ok) {
    throw new ApiServiceError({
      message: baseResponse.message ?? response.statusText,
      data: baseResponse,
      response,
    });
  }

  return data;
};

export default apiService;
