import { ObjectId } from 'mongodb';
import {db} from './db';

export const getNote = async (noteId) => {
    const objectNoteId = new ObjectId(noteId);
    const connection = db.getConnection();
    const note = await connection.collection('notes').findOne({_id:objectNoteId});
    return note
} 