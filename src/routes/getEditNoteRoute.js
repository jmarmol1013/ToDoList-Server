import * as admin from 'firebase-admin';
import {getNote} from '../db';

export const getEditNoteRoute = {
    method:'get',
    path:'/notes/editNote/:id',
    handler: async(req,res) => {
        const {id} = req.params;
        const token = req.headers.authtoken;
        
        const user = await admin.auth().verifyIdToken(token);

        if (!token){
            res.status(401).json({message:"Must be authenticated to edit a note!"});
        }

        const note = await getNote(id);
        res.status(200).json(note);

    }
}