import { CollectionItemType } from "./collection.type";

export const COLLECTION_CONTENT = {
    title: "Explore Our Proudly\nCollection",
    description: "Poliform will showcase  its vision of contemporary architecture,interior design trends, and innovative design approaches",
};

export const COLLECTION_COLUMN_1: CollectionItemType[] = [
    { id: "1", title: "Kitchen Ideas", image: "/kit.png", height: "400px" },
    { id: "2", title: "Wardrobe Ideas", image: "/war.png", height: "600px" }
];

export const COLLECTION_COLUMN_2: CollectionItemType[] = [
    { id: "3", title: "Living Room Ideas ", image: "/liv.png", height: "600px" },
    { id: "4", title: "Bedroom Ideas ", image: "/bed.png", height: "400px" }
];