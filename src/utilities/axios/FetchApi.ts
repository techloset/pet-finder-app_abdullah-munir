import axios from "axios";

interface TokenResponse {
  access_token: string;
  expires_in: number;
}

export let accessToken: string | null = null;

export async function fetchToken(
  CLIENT_ID: string | undefined,
  CLIENT_SECRET: string | undefined
) {
  try {
    const response = await axios.post<TokenResponse>(
      "https://api.petfinder.com/v2/oauth2/token",
      {
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }
    );
    accessToken = response.data.access_token;

    return accessToken;
  } catch (error) {
    console.error("Error fetching token:", error);
    return null;
  }
}

const CLIENT_ID = process.env.REACT_APP_API_KEY;
const CLIENT_SECRET = process.env.REACT_APP_API_SECRET;

fetchToken(CLIENT_ID, CLIENT_SECRET);

setInterval(async () => {
  console.log("Refreshing access token...");
  accessToken = await fetchToken(CLIENT_ID, CLIENT_SECRET);
}, 60 * 60 * 1000);

export async function createPetFinderInstance() {
  try {
    if (!accessToken) await fetchToken(CLIENT_ID, CLIENT_SECRET);
  } catch (error) {
    throw new Error("Error getting access token");
  }
  return axios.create({
    baseURL: `https://api.petfinder.com/v2`,
    timeout: 10000,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
}
