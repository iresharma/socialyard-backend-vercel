import { create_one, get_many, update_one, get_one } from "@/database/functions";
import Booking from "@/models/Booking"
import Facility from "@/models/Facility";
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
    const { page, size } = req.params;
    const { user, date } = req.query;
    console.log([{ column: 'userId', value: user }]);
    let resp = await get_many(Booking, Number(page), Number(size), {'userId': user, 'date': date })
    let bookings = resp.data;
    let temp = bookings.map(async (el: any) => {
        const facility = await get_one(Facility, el.facilityId);
        const slot = await get_one(Slot, el.slotId);
        return { booking: el, slot: slot.data, facility: facility.data }
    })
    resp.data = await Promise.all(temp);
    return res.json(resp)
}

export async function get_booking(req: Request, res: Response) {
    const booking = req.query.booking;
    const rsp = await get_one(Booking, String(booking));
    return res.json(rsp);
}