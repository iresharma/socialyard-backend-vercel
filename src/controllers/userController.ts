import { USER_TYPES } from '@/constants';
import { create_account, delete_account } from '@/database/firebase';
import { create_one, get_one, update_one } from '@/database/functions';
import User from '@/models/User';
import { Request, Response } from 'express';
const admin = require('firebase-admin');
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

export async function create_vendor(req: Request, res: Response) {
    let userData = req.body
    const firebaseResponse = await create_account(userData)
    console.log("Firebase User Created with uid", firebaseResponse)
    if(firebaseResponse.code == 200){
        const user = firebaseResponse.data;
        let userObject = {
            _id: user.uid,
            email: user.email,
            name: user.displayName,
            phone: "",
            dob: "",
            type: USER_TYPES.VENDOR,
            notificationToken: "",
            isActive: false
        }
        console.log(user)
        const response = await create_one(User, userObject);
        if(response.code != 200) {
            // Delete Firebase user
            await delete_account(user.uid)
        }
        res.json(response);
    } else {
        res.json(firebaseResponse)
    }
}

export async function get_user(req: Request, res: Response) {
    console.log(req)
    let id = req.params.id
    let response = await get_one(User, id)
    res.json(response)
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

export async function edit_user(req: Request, res: Response) {
    let id= req.params.id;
    let data = req.body;
    const response = await update_one(User, id, data);
    res.json(response);
  }
