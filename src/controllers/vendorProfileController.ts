import { USER_TYPES } from '@/constants';
import { create_account, delete_account } from '@/database/firebase';
import { create_one, get_one, update_one } from '@/database/functions';
import User from '@/models/User';
import VendorProfile from '@/models/VendorPorfile';
import { Request, Response } from 'express';
const admin = require('firebase-admin');

export async function create_vendor_profile(req: Request, res: Response) {
    let profileData = req.body
    const response = await create_one(VendorProfile, profileData)
    const profileResponse = await User.findById(profileData.uid).exec()
    res.json({...response, data: profileResponse})
}

export async function get_vendor_profile(req: Request, res: Response) {
    let id = req.params.id
    let response = await get_one(VendorProfile, id)
    res.json(response)
}

export async function get_vendor_profiles(req: Request, res: Response) {
    let type = req.params.type
    console.log(type)
    try {
        const response = await User.find().where('type').equals(type.toUpperCase()).exec()
        console.log(response)
        res.json({ message: "Users Fetched Successfully", code: 200 , data: response})
    } catch (error) {
        res.json({
            message: error.message,
            code: error.code
        })
    }
}

export async function edit_vendor_profile(req: Request, res: Response) {
    let id= req.params.id;
    let data = req.body;
    const response = await update_one(User, id, data);
    res.json(response);
  }
