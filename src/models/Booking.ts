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
    userId: [{ type: Schema.Types.ObjectId, ref: "User" }],
    slotId: [{ type: Schema.Types.ObjectId, ref: "Slot" }],
    facilityId: [{ type: Schema.Types.ObjectId, ref: 'Facility' }],
});

const Slot = model<IBooking>("Slot", slotSchema);

export default Slot;