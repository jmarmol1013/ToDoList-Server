import * as admin from 'firebase-admin';
import {editDoingNote, getUserNotes} from '../db';

export const editDoingNoteRoute ={
    method:'put',
    path:'/notes/doing/:id',
    handler: async (req,res) => {
        const {id} = req.params;
        const token = req.headers.authtoken;
        
        const user = await admin.auth().verifyIdToken(token);

        if (!token){
            res.status(401).json({message:"Must be authenticated to edit a note!"});
        }

        await editDoingNote(id);
        const updatedNotes = await getUserNotes(user.user_id);
        res.status(200).json(updatedNotes);
    }
}