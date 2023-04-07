import {db} from './db';

export const createUser = async (email,fullName,userId) => {
    const connection = db.getConnection();
    await connection.collection('users').insertOne({
        email:email,
        uuid:userId,
        fullName:fullName,
    });

}