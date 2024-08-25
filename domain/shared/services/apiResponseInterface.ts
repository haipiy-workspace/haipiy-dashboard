export interface IApiResponseBase<T> {
  success?: boolean;
  status_code?: number;
  message?: string;
  error_code?: number | null;
  data?: T;
}

export interface IApiResponseBaseData {
  success?: boolean;
  statusCode?: number;
  message?: string;
  errorCode?: number | null;
}
