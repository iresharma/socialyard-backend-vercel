
import { Request, Response } from 'express';
import { get_filtered } from "@/database/functions"
import Slots from '@/models/Slot'


const accountSid = 'ACbdb2b5330ad9239c1960e9dd037f4867';
const authToken = 'f5ea3b3492dc067380dc76a31446e74f';
const client = require('twilio')(accountSid, authToken);

const send_whatsApp = (number: String, text: String) => {
    client.messages
        .create({
            body: text,
            from: 'whatsapp:+14155238886',
            to: `whatsapp:${number}`
        })
        .then((message: any) => console.log(message.sid))
        .done();
}

export const check_for_bookings = async (req: Request, res: Response) => {
    // let date: String = await get_filtered(Slots, {});
}

export const send_whatsApp_API = (req: Request, res: Response) => {
    const { number, message } = req.body;
    send_whatsApp(number, message);
    return res.status(200).send()
}