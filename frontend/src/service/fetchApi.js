const fetchApi = async ({ params, method, body, token }) => {
  const data = await fetch("http://localhost:8080/api/" + params, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      token,
    },
    body: JSON.stringify(body),
  });
  return await data.json();
};
/* ------------ REQUESTS  ------------ */
export const login = async (data) => {
  return await fetchApi({ params: "auth/login", method: "POST", body: data });
};

export const googleLogin = async (data) => {
  return await fetchApi({
    params: "auth/googleLogin",
    method: "POST",
    body: data,
  });
};

export const findUser = async (id, token) => {
  return await fetchApi({ params: "user/" + id, method: "GET", token });
};

/* export const login = () => {}; */
