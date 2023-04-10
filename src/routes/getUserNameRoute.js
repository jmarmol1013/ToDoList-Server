import * as admin from 'firebase-admin';
import {getUserName} from '../db';

export const getUserNameRoute = {
    method:'get',
    path:'/user/:id/name',
    handler : async (req,res) =>{
        const token = req.headers.authtoken;
        const userId = req.params.id;

        const user = await admin.auth().verifyIdToken(token);

        if (user.user_id !== userId){
            return res.status(401).json({message:`No authorize`});
        }

        const userName = await getUserName(user.user_id);
        res.status(200).json(userName);
    }
}