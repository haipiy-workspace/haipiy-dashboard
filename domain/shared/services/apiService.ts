import { dataTypeCheck } from "../utils";

export class CustomApiServiceError extends Error {
  constructor(message: string, name: string) {
    super(message);
    this.name = name;
  }
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const timeout = process.env.NEXT_PUBLIC_TIMEOUT ? Number(process.env.NEXT_PUBLIC_TIMEOUT) : 6000;

export const apiService = async <ResponseType>(
  endpoint: string,
  options?: RequestInit,
): Promise<ResponseType> => {
  const controller = new AbortController();
  const { signal } = controller;
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
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
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new CustomApiServiceError(`${error.message}, on apiService function`, error.name);
    }
    throw new CustomApiServiceError(
      "Unknown error occurred on apiService function",
      "UnknownError",
    );
  }
};

export default apiService;
