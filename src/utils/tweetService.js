import { API } from ".";

const getTweets = async () => {
  try {
    const response = await fetch(`${API}/tweets`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    return response.json();
  } catch (e) {
    return e;
  }
};

const postTweet = async (token, tweet) => {
  try {
    const response = await fetch(`${API}/tweets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
      body: JSON.stringify({ tweet }),
    });
    return response.json();
  } catch (e) {
    return e;
  }
};

export { getTweets, postTweet };
