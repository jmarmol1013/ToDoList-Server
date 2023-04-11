import { createUserRoute } from "./createUserRoute";
import { getUserNotesRoute } from "./getUserNotesRoute";
import { getUserNameRoute } from "./getUserNameRoute";
import { createNoteRoute } from "./createNoteRoute";
import { deleteNoteRoute } from "./deleteNoteRoute";
import { editDoingNoteRoute } from "./editDoingNoteRoute";
import { editDoneNoteRoute } from "./editDoneNoteRoute";


export const routes = [
    createUserRoute,
    getUserNotesRoute,
    getUserNameRoute,
    createNoteRoute,
    deleteNoteRoute,
    editDoingNoteRoute,
    editDoneNoteRoute,
];