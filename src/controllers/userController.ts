import User from '@/models/user';
import { Request, Response } from 'express';

export async function create_user(req: Request, res: Response) {
    let user = req.body
    const emp = new User(user);
    try {
        const response = await emp.save()
        res.json({ message: "User Added Successfully", code: 200 })
    } catch (error) {
        res.json({
            message: error.message,
            code: error.code
        })
    }
}

export async function get_user(req: Request, res: Response) {
    console.log(req)
    let id = req.params.id
    try {
        console.log(id)
        const response = await User.findById(id).exec()
        console.log(response)
        res.json({ message: "User Fetched Successfully", code: 200 , data: response})
    } catch (error) {
        res.json({
            message: error.message,
            code: error.code
        })
    }
}

export async function get_users(req: Request, res: Response) {
    let id = req.query._id
    try {
        console.log(id)
        const response = await User.find().where('type').equals('CUSTOMER').exec()
        console.log(response)
        res.json({ message: "Users Fetched Successfully", code: 200 , data: response})
    } catch (error) {
        res.json({
            message: error.message,
            code: error.code
        })
    }
}
