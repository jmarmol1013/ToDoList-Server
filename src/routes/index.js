import { createUserRoute } from "./createUserRoute";
import { getUserNotesRoute } from "./getUserNotesRoute";
import { getUserNameRoute } from "./getUserNameRoute";
import { createNoteRoute } from "./createNoteRoute";
import { deleteNoteRoute } from "./deleteNoteRoute";
import { editDoingNoteRoute } from "./editDoingNoteRoute";
import { editDoneNoteRoute } from "./editDoneNoteRoute";
import { getEditNoteRoute } from "./getEditNoteRoute";
import {editNoteRoute} from './editNoteRoute'

export const routes = [
    createUserRoute,
    getUserNotesRoute,
    getUserNameRoute,
    createNoteRoute,
    deleteNoteRoute,
    editDoingNoteRoute,
    editDoneNoteRoute,
    getEditNoteRoute,
    editNoteRoute,
];