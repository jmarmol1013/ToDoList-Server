import * as admin from 'firebase-admin';
import { deleteNote, getUserNotes } from '../db';

export const deleteNoteRoute = {
    method: 'delete',
    path: '/delete/notes/:id',
    handler: async (req, res) => {
        const { id } = req.params;
        const token = req.headers.authtoken;

        const user = await admin.auth().verifyIdToken(token);

        if (!token) {
            res.status(401).json({message:"Must be authenticated to delete a note!"});
        }

        await deleteNote(id);
        const updatedNotes = await getUserNotes(user.user_id);
        res.status(200).json(updatedNotes);
    },
}