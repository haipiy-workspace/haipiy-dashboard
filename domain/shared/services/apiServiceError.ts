import { IApiResponseBaseData } from "./apiResponseInterface";

export class ApiServiceError extends Error {
  response?: Response;

  data?: IApiResponseBaseData;

  constructor({
    message,
    data,
    response,
  }: {
    message: string;
    data: IApiResponseBaseData;
    response: Response;
  }) {
    super(message);
    this.name = "ApiServiceError";
    this.response = response;
    this.data = data ?? { message, status_code: response.status };
  }
}

export default ApiServiceError;
