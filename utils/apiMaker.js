import { getToken } from "@/lib/action";


export const base_url =
  process.env.NODE_ENV === "development"
    ? "https://staging.squaredonations.com/api"
    : "https://staging.squaredonations.com/api";

// const base_url = "https://test-server-z6ji.onrender.com";

export const fetchApi = ({ endpoint, path, method = "GET" }) => {
  return async ({
    filter,
    params,
    token,
    headers,
    cache = null,
    nextHeaders = {},
    isSwr,
  }) => {
    const url = new URL(`${base_url}${endpoint + path}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
    try {
      const server_token = await getToken();
      const response = await fetch(url, {
        credentials: "include",
        method,
        ...(cache && { cache }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token || server_token}`,
          ...headers,
        },
        next: nextHeaders,
        ...(method === "POST" && { body: JSON.stringify(filter) }),
      });

      if (!response.ok) {
        await appError(response);
      }

      const data = await response.json();

      return data.success ? data : {};
    } catch (error) {
      console.error(error);
      if (isSwr) throw error;
    }
  };
};

export const reqApi =
  ({ endpoint, path, method, params, isHandleError = false }) =>
  async ({ data, token }) => {
    const url = new URL(`${base_url}${endpoint + path}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
    return await handleRequest({ method, url, data, token, isHandleError });
  };

async function handleRequest({ url, data, token, method, isHandleError }) {
  const isFormData = data instanceof FormData;

  const response = await fetch(url, {
    credentials: "include",
    method,
    headers: {
      ...(!isFormData && { "Content-Type": "application/json" }),
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...((method === "PATCH" || method === "POST" || method === "PUT") && {
      body: isFormData ? data : JSON.stringify(data),
    }),
  });
  if (!response.ok) {
    await appError(response, isHandleError);
  }

  return await response.json();
}

async function appError(response, isHandleError) {
  const errorBody = await response.json();
  if (isHandleError) {
    throw errorBody;
  } else {
    const error = new Error(
      errorBody.message || "An error occurred while fetching the data."
    );
    error.status = response.status;
    error.statusCode = errorBody.statusCode;
    error.info = errorBody;
    throw error;
  }
}
