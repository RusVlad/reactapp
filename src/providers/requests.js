const API_URL = process.env.API_URL;

/**
 *
 * @param {string} url api path
 * @param {string} type HTTP request method
 * @param {any} params body
 */
const requestFunction = async (url, type, params) => {
  try {
    let res = await fetch(`${API_URL}${url}`, {
      method: type,
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: params && JSON.stringify(params),
    });
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const RequestProvider = {
  get: async (url) => {
    return await requestFunction(url, "GET");
  },
  post: async (url, params) => {
    return await requestFunction(url, "POST", params);
  },
  delete: async (url) => {
    return await requestFunction(url, "DELETE");
  },
  put: async (url, params) => {
    return await requestFunction(url, "PUT", params);
  },
};

export default RequestProvider;
