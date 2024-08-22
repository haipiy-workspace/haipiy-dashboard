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
    const response = await fetch(`${baseUrl}${endpoint}`, {
      signal,
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    clearTimeout(timeoutId);

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new CustomApiServiceError(`${error.message}, on apiService.ts level`, error.name);
    }
    throw new CustomApiServiceError(
      "Unknown error occurred on apiService.ts level",
      "UnknownError",
    );
  }
};

export default apiService;
