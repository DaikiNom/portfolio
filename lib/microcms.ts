import { client } from "./client"

export async function getWorks() {
    const data = await client.get({
        endpoint: "works",
        queries: { limit: 100 }
    });
    return data.contents;
}

export async function getCareer() {
    const data = await client.get({
        endpoint: "career",
        queries: {
            limit: 100,
            orders: "date"
        }
    });
    return data.contents;
}