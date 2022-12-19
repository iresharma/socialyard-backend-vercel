import { create_one, get_many, get_one, update_one } from "@/database/functions";
import Booking from "@/models/Booking"
import Slot from '@/models/Slot'
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid'

export async function create_booking(req: Request, res: Response) {
    const body = req.body;
    body['_id'] = uuidv4();
    const response = await create_one(Booking, body);
    const resp2 = await update_one(Slot, body['slotId'], { booking: body['_id'] });
    return res.json(response)
}

export async function list_bookings(req: Request, res: Response) {
    const { page, page_size } = req.query;
    let resp;
    resp = await get_many(Booking, Number(page), Number(page_size), req.body.filters.length == 0 ? req.body.filters : [])
    console.log(resp)
    return res.json(resp)
}

export async function get_booking(req: Request, res: Response) {
    const booking = req.query.booking;
    const rsp = await get_one(Booking, String(booking));
    return res.json(rsp);
}