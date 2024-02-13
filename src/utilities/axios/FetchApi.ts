import axios from "axios";

interface TokenResponse {
  access_token: string;
  expires_in: number;
}

export let accessToken: string | null = null;

export async function fetchToken(clientId: string, clientSecret: string) {
  try {
    const response = await axios.post<TokenResponse>(
      "https://api.petfinder.com/v2/oauth2/token",
      {
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }
    );
    accessToken = response.data.access_token;

    return accessToken;
  } catch (error) {
    console.error("Error fetching token:", error);
    return null;
  }
}





const CLIENT_ID = "x6ty0NnOjoeXPkrGRLoMTXffnuhSLcsinNci8DV9bl4IlF4M9b";
const CLIENT_SECRET = "mBD6eu0JvZ7bCYfCnsQRtBZ9hwobQEM3Q2UG7oie";

fetchToken(CLIENT_ID, CLIENT_SECRET);

setInterval(async () => {
  console.log("Refreshing access token...");
   accessToken = await fetchToken(CLIENT_ID, CLIENT_SECRET);
}, 60 * 60 * 1000); // Refresh every hour

export async function createPetFinderInstance() {
	try {
		if (!accessToken) await fetchToken(CLIENT_ID, CLIENT_SECRET);
	} catch (error) {
		throw new Error('Error getting access token')
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

