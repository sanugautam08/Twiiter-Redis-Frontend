import { API } from ".";

const logIn = async (user) => {
  try {
    const response = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (e) {
    return e;
  }
};

export default logIn;
