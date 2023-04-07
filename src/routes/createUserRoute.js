import * as admin from 'firebase-admin';
import {createUser} from '../db';

export const createUserRoute = {
    method:'post',
    path:'/users',
    handler: async (req,res) => {
        const token = req.headers.authtoken;
        const {email,fullName} = req.body;

        const user = await admin.auth().verifyIdToken(token);

        if (!token) {
            res.status(401).json({message:"Must be authenticated to create new groups!"});
        }

        await createUser(email,fullName,user.user_id);

        res.status(200).json({message:"Succes!"});
    }
}