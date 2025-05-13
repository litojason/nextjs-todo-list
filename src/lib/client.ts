import { getToken } from "./cookies";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1`;

const fetcher = async <R>(url: string, init: RequestInit = {}): Promise<R> => {
  const token = await getToken();

  const response = await fetch(`${API_URL}${url}`, {
    ...init,
    headers: {
      ...init.headers,
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  if (!response.ok) {
    const error = (await response.json()) as ClientError;
    throw { status: response.status, ...error };
  }

  const data = (await response.json()) as R;

  return data;
};

export type ClientError = {
  statusCode: number;
  message: string;
  errors?: object[];
};

const client = {
  get: <T>(url: string, options: RequestInit = {}) => fetcher<T>(url, options),
  post: <T, R>(url: string, data: T, options: RequestInit = {}) =>
    fetcher<R>(url, { method: "POST", body: JSON.stringify(data), ...options }),
  put: <T, R>(url: string, data: T, options: RequestInit = {}) =>
    fetcher<R>(url, { method: "PUT", body: JSON.stringify(data), ...options }),
  delete: <T>(url: string, options: RequestInit = {}) =>
    fetcher<T>(url, { method: "DELETE", ...options }),
};

export default client;
