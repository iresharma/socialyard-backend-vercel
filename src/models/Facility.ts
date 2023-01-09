import { Document, model, Schema } from "mongoose";
export interface IFacility extends Document {
    _id: string,
    name: string;
    sku: string;
    type: string;
    isActive: boolean;
    contact: string;
    email: string;
    description: string;
    pincode: string;
    state: string;
    city: string;
    address: string;
    mapLink: string;
    tags: string[];
    category: string;
    coordinates: number[];
    vendor: string,
    images: string[],
    createdAt: Date;
}

const facilitySchema: Schema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mapLink: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
    category: {
        type: String,
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Facility = model<IFacility>("Facility", facilitySchema);

export default Facility;