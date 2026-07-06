import { CollectionItemType } from "./collection.type";

export const COLLECTION_CONTENT = {
    title: "Explore Our Proudly\nCollection",
    description: "We bring contemporary interior design to life through innovative ideas, thoughtful planning, and elegant spaces that inspire modern living.",
};

export const COLLECTION_COLUMN_1: CollectionItemType[] = [
    { id: "1", title: "Kitchen Ideas", image: "/kit.webp", height: "400px", pdfUrl: "/kit.pdf" },
    { id: "2", title: "Wardrobe Ideas", image: "/war1.webp", height: "600px", pdfUrl: "/war.pdf" }
];

export const COLLECTION_COLUMN_2: CollectionItemType[] = [
    { id: "3", title: "Living Room Ideas ", image: "/liv.webp", height: "600px", pdfUrl: "/liv.pdf" },
    { id: "4", title: "Bedroom Ideas ", image: "/bed.webp", height: "400px", pdfUrl: "/bed.pdf" }
];