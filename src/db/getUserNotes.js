import {db} from './db';

export const getUserNotes = async (userId) => {
    const connection = db.getConnection();
    const notes = await connection.collection('notes').find({ownerId:userId}).toArray();

    return notes;
} 