import {db} from './db';

export const createNote = async (note,noteType,userId) => {
    const connection = db.getConnection();
    await connection.collection('notes').insertOne({
        note:note,
        typeNote:noteType,
        noteList:'toDo',
        ownerId:userId,
    });
}