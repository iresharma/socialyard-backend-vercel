import { create_one, get_many, get_one } from "@/database/functions";
import Booking from "@/models/Booking"
import { Request, Response } from 'express';

export async function create_booking(req: Request, res: Response) {
    const body = req.body;

    const response = await create_one(Booking, body);
    return res.json(response)
}

export async function list_bookings(req: Request, res: Response) {
    const { page, page_size } = req.query;
    let resp;
    if (req.body.filters.length == 0) {
        resp = await get_many(Booking, Number(page), Number(page_size), []);
        return res.json(resp)
    }
    resp = await get_many(Booking, Number(page), Number(page_size), req.body.filters || [])
    return res.json(resp)
}

export async function get_booking(req: Request, res: Response) {
    const booking = req.query.booking;
    const rsp = await get_one(Booking, String(booking));
    return res.json(rsp);
}