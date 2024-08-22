export interface IApiResponseBaseInterface<T> {
  success?: boolean;
  code?: number;
  message?: string;
  error_code?: number;
  data?: T;
}
