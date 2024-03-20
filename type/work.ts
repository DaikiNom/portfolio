import { MicroCMSImage } from "microcms-js-sdk";

export type Work = {
    id: string;
    title: string;
    description?: string;
    image?: MicroCMSImage;
    link?: string;
    code?: string;
};