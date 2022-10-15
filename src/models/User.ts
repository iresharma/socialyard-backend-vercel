import { Document, model, Schema } from "mongoose";
enum UserType {
    CUSTOMER = 'CUSTOMER',
    VENDOR = 'VENDOR',
    ADMIN = 'ADMIN',
}
export interface IUser extends Document {
    _id: string,
    email: string;
    name: string;
    phone: string;
    dob: string,
    type: UserType,
    notificationToken: string,
    isActive: boolean,
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
        required: true,
        
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
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = model<IUser>("User", userSchema);

export default User; 