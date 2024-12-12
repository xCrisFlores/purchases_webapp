import axiosClient from "./axiosClient";

export const loginApi = async (data) => {
  try {
    const response = await axiosClient.post('users/login', data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
