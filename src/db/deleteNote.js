import { ObjectId } from 'mongodb';
import { db } from './db';

export const deleteNote = async (noteId) => {
    const id = new ObjectId(noteId);
    const connection = db.getConnection();
    await connection.collection('notes').deleteOne({ _id: id });
}