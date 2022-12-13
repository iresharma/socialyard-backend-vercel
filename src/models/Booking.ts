import { Document, model, Mongoose, Schema } from "mongoose";
export interface IBooking extends Document {
    _id: string,
    userId: String,
    slotId: String,
    faclityId: String
}

const slotSchema: Schema = new Schema({
    _id: {
        type: String,
        required: true
    },
    userId: { type: String, required: true },
    slotId: { type: String, required: true },
    facilityId: { type: String, required: true },
});

const Booking = model<IBooking>("Booking", slotSchema);

export default Booking;