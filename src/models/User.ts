import { Document, model, Schema } from "mongoose";
export interface IUser extends Document {
    _id: string,
    email: string;
    name: string;
    phone: string;
    dob: string,
    type: string,
    notificationToken: string,
    createdAt: Date;
}

const userSchema: Schema = new Schema({
    _id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    notificationToken: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = model<IUser>("User", userSchema);

export default User; 