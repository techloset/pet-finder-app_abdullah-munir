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





const CLIENT_ID = "cgGo3LpgXFRimR6cvMp397SvQkOnJ1ojwzcEQ5GTOTujmndlVV";
const CLIENT_SECRET = "DHAcRPPycrUoRlhEIvqCIWx4BvAV6UXpFizdoUr4";

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

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJjZ0dvM0xwZ1hGUmltUjZjdk1wMzk3U3ZRa09uSjFvand6Y0VRNUdUT1R1am1uZGxWViIsImp0aSI6IjRkM2VmMDQ5MzdjNzkzOWRmMDAwYmQ4NWFiZTlmOTE4NGY4YWU0NzdhMzBmNDNhMzE5NDkxMjc1OWY3MjFmNGM0OWEyYjY5MjdiZjdjNGE1IiwiaWF0IjoxNzA2Njk4MDk3LCJuYmYiOjE3MDY2OTgwOTcsImV4cCI6MTcwNjcwMTY5Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.xySoAM17xze0ZKcFq2FfIlwRr5rCbW9xxDNMnJE9MaTqCkj4mC-fiL_Ysjw_3Es7ZbXo37qJrrHCgbxhnlezQzIUMn3ncM33vOcUFx8sUCBQa1Cdccr5Ak24AOKvqTyKqWuSEganNa5JffEgpeqMBfId-0DmooX9o5wRO9bqor1O4CxYBBCqkCep8I7Gket8M55jbA4mmHnbMZLOaJ1noMCxAxG1XBde2lKx6E45C-oLLa4JQKn_5gHHDLj2wquBBT-q_Olx4N6CDIXhuCXQT9s8CqMBPpYItm06b4P8pVMb9Rvsm_EFFR6-sTOmKIXG_mxrr5lhgalwu-wOse-Fjg
