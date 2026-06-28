import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {

    const url =
        `https://ws.audioscrobbler.com/2.0/?` +
        new URLSearchParams({
            method: "user.getrecenttracks",
            user: "aliceowo_",
            api_key: "becf9a03a0f784eabec674e854b3e111", // github pages is for chuds
            format: "json",
            limit: "1",
        });

    const response = await fetch(url);

    if (!response.ok) {
        return new Response(
            JSON.stringify({ error: "Failed to fetch Last.fm" }),
            {
                status: response.status,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    });
};
