import { API } from ".";

const signUp = async (userData) => {
  try {
    const response = await fetch(`${API}/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(userData),
    });
    return response.json();
  } catch (e) {
    return e;
  }
};

export default signUp;
