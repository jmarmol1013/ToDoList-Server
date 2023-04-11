import * as admin from 'firebase-admin';
import {editDoneNote, getUserNotes} from '../db';

export const editDoneNoteRoute ={
    method:'put',
    path:'/notes/done/:id',
    handler: async (req,res) => {
        const {id} = req.params;
        const token = req.headers.authtoken;
        
        const user = await admin.auth().verifyIdToken(token);

        if (!token){
            res.status(401).json({message:"Must be authenticated to edit a note!"});
        }

        await editDoneNote(id);
        const updatedNotes = await getUserNotes(user.user_id);
        res.status(200).json(updatedNotes);
    }
}