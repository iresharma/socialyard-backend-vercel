import { create_one, delete_one } from '@/database/functions';
import Session from '@/models/Session';
import User from '@/models/user';
import { Request, Response } from 'express';

export async function create_session(req: Request, res: Response) {
    let sessionData = req.body
    const userResponse = await User.findById(sessionData.uid).exec()
    const response = await create_one(Session, { ...sessionData, 'type': userResponse.type })
    res.json({...response, data: userResponse})
}
export async function delete_session(req: Request, res: Response) {
    let id = req.params.id
    const response = await delete_one(Session, id)
    res.json(response)
}