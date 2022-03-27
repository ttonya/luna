import { API_URL } from "../consts/api";

export const getData = async (url = "", heads?: Headers) => {
  const headers = heads
    ? heads
    : new Headers({ "Content-Type": "application/json" });

  const response = await fetch(`${API_URL}/${url}`, {
    method: "GET",
    mode: "cors",
    cache: "default",
    headers: headers,
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

  let res;

  try {
    let text = await response.text();

    res = JSON.parse(text);
  } catch (e) {
    res = response;
  }
  if (response.type === "error") {
    console.error(response);
    throw new Error("Network Error");
  } else {
    return res;
  }
};
