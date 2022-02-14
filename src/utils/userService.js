import { API } from ".";

const getUser = async (token) => {
  try {
    const response = await fetch(`${API}/user/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  } catch (e) {
    return e;
  }
};

export { getUser };
