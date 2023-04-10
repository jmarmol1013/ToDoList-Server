import { createUserRoute } from "./createUserRoute";
import { getUserNotesRoute } from "./getUserNotesRoute";
import { getUserNameRoute } from "./getUserNameRoute";
import { createNoteRoute } from "./createNoteRoute";

export const routes = [
    createUserRoute,
    getUserNotesRoute,
    getUserNameRoute,
    createNoteRoute,
];