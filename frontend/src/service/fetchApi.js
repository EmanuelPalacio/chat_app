const fetchApi = async ({ params, method, body, token }) => {
  try {
    const data = await fetch("http://localhost:8080/api/" + params, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        token,
      },
      body: JSON.stringify(body),
    });
    if (data.ok === false) throw data;
    return await data.json();
  } catch (error) {
    throw error;
  }
};
/* ------------ REQUESTS  ------------ */
export const login = async (data) => {
  return await fetchApi({ params: "auth/login", method: "POST", body: data });
};

export const googleLogin = async (token) => {
  return await fetchApi({
    params: "auth/googleLogin",
    method: "POST",
    token,
  });
};

export const findUser = async (id, token) => {
  return await fetchApi({ params: "user/" + id, method: "GET", token });
};

/* export const login = () => {}; */
