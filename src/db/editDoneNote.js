import { ObjectId } from 'mongodb';
import {db} from './db';

export const editDoneNote = async (noteId) => {
    const id =  new ObjectId(noteId);
    const connection = db.getConnection();
    await connection.collection('notes').updateOne(
        {_id:id},
        {$set: {noteList:'done'}}
    );
}