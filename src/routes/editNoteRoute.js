import * as admin from 'firebase-admin';
import {editNote} from '../db';

export const editNoteRoute = {
    method:'put',
    path:'/editNote/:id',
    handler: async (req,res) => {
        const {id} = req.params;
        const token = req.headers.authtoken;
        const {note,noteType} = req.body;
       
        if (!token){
            res.status(401).json({message:"Must be authenticated to edit a note!"});
        }

        await editNote(id,note,noteType);
        res.status(200).json({message:"Succes!"});
    }
}

