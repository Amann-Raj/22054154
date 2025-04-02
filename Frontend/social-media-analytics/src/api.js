const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchUsers = async () => {
  try {
    if (!BASE_URL) throw new Error("API base URL is not defined");

    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error(`Failed to fetch users, Status: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return { error: error.message };
  }
};

export const fetchTopUsers = async () => {
  try {
    if (!BASE_URL) throw new Error("API base URL is not defined");

    const response = await fetch(`${BASE_URL}/top-users`);
    if (!response.ok) throw new Error(`Failed to fetch top users, Status: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Error fetching top users:", error);
    return [];
  }
};

export const fetchTrendingPosts = async () => {
  try {
    if (!BASE_URL) throw new Error("API base URL is not defined");

    const response = await fetch(`${BASE_URL}/trending-posts`);
    if (!response.ok) throw new Error(`Failed to fetch trending posts, Status: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Error fetching trending posts:", error);
    return [];
  }
};

export const fetchFeed = async () => {
  try {
    if (!BASE_URL) throw new Error("API base URL is not defined");

    const response = await fetch(`${BASE_URL}/feed`);
    if (!response.ok) throw new Error(`Failed to fetch feed, Status: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Error fetching feed:", error);
    return [];
  }
};
