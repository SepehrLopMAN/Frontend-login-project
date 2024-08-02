import axios from "axios";

const API_URL = "https://dummyjson.com/auth";

export const loginAuth = async (username, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      {
        // DummyJson does not accept Email, Instead Username has been used!
        username,
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    console.log("res", response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
