import {db} from './db';

export const getUserName = async (userId) => {
    const connection = db.getConnection();
    const name = await connection.collection('users').find({uuid:userId}).project({'fullName':1,'_id':0}).toArray();

    return name;
} 