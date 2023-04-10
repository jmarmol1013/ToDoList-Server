import * as admin from 'firebase-admin';
import {getUserNotes} from '../db';

export const getUserNotesRoute = {
    method:'get',
    path:'/user/:id/notes',
    handler : async (req,res) =>{
        const token = req.headers.authtoken;
        const userId = req.params.id;

        const user = await admin.auth().verifyIdToken(token);

        if (user.user_id !== userId){
            return res.status(401).json({message:`No authorize`});
        }

        const userNotes = await getUserNotes(user.user_id);
        res.status(200).json(userNotes);
    }
}