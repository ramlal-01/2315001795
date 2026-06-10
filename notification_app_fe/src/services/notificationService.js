import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: import.meta.env.VITE_ACCESS_TOKEN,
    "Content-Type": "application/json",
  },
});

export const getNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  let url = `/notifications?page=${page}&limit=${limit}`;

  if (type) {
    url += `&notification_type=${type}`;
  }

  const response = await api.get(url);

  return response.data;
};