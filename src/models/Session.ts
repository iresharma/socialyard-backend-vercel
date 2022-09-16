import { Document, model, Schema } from "mongoose";
export interface ISession extends Document {
    _id: string,
    uid: string;
    type: string;
    createdAt: Date;
}

const sessionSchema: Schema = new Schema({
    _id: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Session = model<ISession>("Session", sessionSchema);

export default Session; 