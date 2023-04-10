import * as admin from 'firebase-admin';
import {createNote} from '../db';

export const createNoteRoute = {
    method:'post',
    path:'/createNote',
    handler: async (req,res) => {
        const token = req.headers.authtoken;
        const {note,noteType} = req.body;

        const user = await admin.auth().verifyIdToken(token);

        if (!token) {
            res.status(401).json({message:"Must be authenticated to create new groups!"});
        }

        await createNote(note,noteType,user.user_id);

        res.status(200).json({message:"Succes!"});
    }
}