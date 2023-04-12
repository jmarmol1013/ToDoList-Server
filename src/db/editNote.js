import { ObjectId } from 'mongodb';
import {db} from './db';

export const editNote = async (noteId,note,noteType) => {
    const objectNoteId = new ObjectId(noteId);
    
    const connection = db.getConnection();
    await connection.collection('notes').updateOne(
        {_id:objectNoteId},
        {$set:{note:note,typeNote:noteType}}
    )
}