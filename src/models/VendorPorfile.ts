import { Document, model, Schema } from "mongoose";

interface AccountDetails {
    accountName: string,
    accountType: string,
    accountNumber: string,
    ifsc: string
}
interface AdditionalContactDetails {
    name: string,
    phone: string
}
interface Address {
    line1: string,
    line2: string,
    city: string,
    state: string,
    pincode: string
}
enum OrganizationType {
    PRIVATE_LIMITED = 'PRIVATE_LIMITED',
    PUBLIC_LIMITED = 'PUBLIC_LIMITED',
    TRUST = 'TRUST',
    PARTNERSHIP = 'PARTNERSHIP',
    PROPRIETORSHIP = 'PROPRIETORSHIP'
}
export interface IVendorProfile extends Document {
    _id: string,
    email: string;
    name: string;
    phone: string;
    imageUrl?: string,
    accountDetails?: AccountDetails,
    additionalContactDetails?: [AdditionalContactDetails],
    address?: Address,
    organizationName?: string,
    organizationType?: OrganizationType,
    gstNumber?: string,
    gstAddress?: string,
    createdAt: Date;
}
const accountDetailsSchema: Schema = new Schema({
    accountName: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    ifsc: {
        type: String,
        required: true
    },
})
const additionalContactDetailsSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})
const AddressSchema: Schema = new Schema({
    line1: {
        type: String,
        required: true
    },
    line2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    }
})
const vendorProfileSchema: Schema = new Schema({
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
    phone: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    accountDetails: {
        type: accountDetailsSchema,
        required: false 
    },
    additionalContactDetails: {
        type: [additionalContactDetailsSchema],
        required: false
    },
    address: {
        type: AddressSchema,
        required: false
    },
    organizationName: {
        type: String,
        required: false
    },
    organizationType: {
        type: String,
        required: false
    },
    gstNumber: {
        type: String,
        required: false
    },
    gstAddress: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const VendorProfile = model<IVendorProfile>("VendorProfile", vendorProfileSchema);

export default VendorProfile; 