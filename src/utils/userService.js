import { API } from ".";

const fetchUser = async (token) => {
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

const deleteUser = async (token) => {
  try {
    const response = await fetch(`${API}/user/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });
    return response.json();
  } catch (e) {
    return e;
  }
};

const updateUser = async (token, update) => {
  try {
    const response = await fetch(`${API}/user/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
      body: JSON.stringify(update),
    });
    return response.json();
  } catch (e) {
    return e;
  }
};

export { fetchUser, updateUser, deleteUser };
