import type { Work } from "@/types/work";
import type { Career } from "@/types/career";
import type { Social } from "@/types/social";

import { client } from "./client";

export const getWorks = async (): Promise<Work[]> => {
    return await client.get({
        endpoint: "works",
        queries: {
            limit: 30,
        }
    }).then((res) => res.contents)
        .catch((err) => {
            console.error(err);
            return [];
        }
        );
}

export const getCareer = async (): Promise<Career[]> => {
    return await client.get({
        endpoint: "career",
        queries: {
            orders: "date"
        }
    }).then((res) => res.contents)
        .catch((err) => {
            console.error(err);
            return [];
        }
        );
}

export const getSocial = async (): Promise<Social[]> => {
    return await client.get({
        endpoint: "social",
        queries: {
            limit: 5,
        }
    }).then((res) => res.contents)
        .catch((err) => {
            console.error(err);
            return [];
        }
        );
}