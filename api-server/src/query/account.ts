import {ResultSetHeader,  RowDataPacket, FieldPacket} from 'mysql2/promise'
import * as dbUtil from '../util/db';

export async function select(nickname: string) {
    const db = await dbUtil.getConnection();
    try {
        const query = `select * from Account where nickname = '${nickname}'`;
        var [result, _]: [RowDataPacket[], FieldPacket[]] = await db.query(query);

        console.log(result);

        if (result.length > 0) {
            return result[0];
        } else {
            return null;
        }
    } finally {
        db.release();
    }
}

export async function insert(nickname: string) {
    const db = await dbUtil.getConnection();
    try {
        const query = `insert into Account (\`nickname\`) values ('${nickname}')`;
        var [result, _]: [ResultSetHeader, FieldPacket[]] = await db.query(query);
        
        console.log(result);
        return result.insertId;
    } finally {
        db.release();
    }
    
}

export async function remove(nickname: string) {
    const db = await dbUtil.getConnection();
    try {
        const query = `delete from Account where \`nickname\` = ('${nickname}')`;
        var [result, _]: [ResultSetHeader, FieldPacket[]] = await db.query(query);
        
        console.log(result);
        return result.affectedRows;
    } finally {
        db.release();
    }
    
}
