import { Document, model, Schema } from "mongoose";
export interface ISlot extends Document {
    _id: string,
    facility: string,
	timing: string,
	date: Date
	booking: string
	price: number 
}

const slotSchema: Schema = new Schema({
    _id: {
        type: String,
        required: true
    },
    facility: {
        type: String,
        required: true
    },
    timing: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    booking: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Slot = model<ISlot>("Slot", slotSchema);

export default Slot;