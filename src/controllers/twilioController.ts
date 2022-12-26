
import { Request, Response } from 'express';
import { get_filtered } from "@/database/functions"
import Slots from '@/models/Slot'


const accountSid = 'ACbdb2b5330ad9239c1960e9dd037f4867';
const authToken = '8536a5010755a8378641ee95b8db17de';
const client = require('twilio')(accountSid, authToken);

const otpStore = Object.create({});

const send_whatsApp = (number: String, text: String) => {
    client.messages
        .create({
            body: text,
            from: 'whatsapp:+14155238886',
            to: `whatsapp:+91${number}`
        })
        .then((message: any) => console.log(message.sid))
        .done();
}

export const send_whatsApp_API = (req: Request, res: Response) => {
    const { number, message } = req.body;
    send_whatsApp(number, message);
    return res.status(200).send()
}

export const gen_otp = (req: Request, res: Response) => {
    const otp = Math.floor(Math.random() * 10000)
    const { number } = req.body;
    otpStore[number] = otp;
    send_whatsApp(number, `Your verification code for socialYard is ${otp}`)
    return res.status(200).send({ otp })
}

export const verify_otp = (req: Request, res: Response) => {
    const { otp, number } = req.body;
    if (otpStore[number] == Number(otp)) {
        return res.status(200).send()
    }
    return res.status(401).send()
}