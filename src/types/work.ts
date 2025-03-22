import type { MicroCMSImage } from "microcms-js-sdk";

export type Work = {
    id: string;
    title: string;
    genre: string[];
    description?: string;
    image?: MicroCMSImage;
    link?: string;
    code?: string;
};