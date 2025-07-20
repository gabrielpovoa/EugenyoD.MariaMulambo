import {StaticImageData} from "next/image";

export interface witchcraftPosts {
    id: string;
    imageUrl: StaticImageData;
    caption: string;
    content: string;
}