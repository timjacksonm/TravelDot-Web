import { PUBLIC_API_MOCK, PUBLIC_API_URL } from "astro:env/client";

// Resolves to the HTTP status, or 0 when the request never reached the API.
export async function postToApi(path: string, body?: unknown): Promise<number> {
  if (PUBLIC_API_MOCK) return mockStatus(path, body);

  try {
    const res = await fetch(new URL(path, PUBLIC_API_URL), {
      method: "POST",
      headers: body === undefined ? undefined : { "Content-Type": "application/json" },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    return res.status;
  } catch {
    return 0;
  }
}

// The API's CORS allowlist blocks localhost and previews. Put mock400, mock404, mock429 or
// mock500 in an email or token to see that response.
async function mockStatus(path: string, body: unknown): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  const input = path + JSON.stringify(body ?? "");
  for (const code of [400, 404, 429, 500]) {
    if (input.includes(`mock${code}`)) return code;
  }
  return path === "/api/waitlist" ? 202 : 204;
}
