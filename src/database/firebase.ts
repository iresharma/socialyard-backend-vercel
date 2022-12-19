const admin = require('firebase-admin');
const generateRandomPass = () => {
    return "12345678"
}
admin.initializeApp();
export const create_account = async (data: any) => {
    try {
        const user = await admin.auth().createUser({
            email: data.email,
            emailVerified: true,
            password: data.password || generateRandomPass(),
            displayName: data.name,
            disabled: false,
            phoneNumber: data.phone
        });
        return { message: 'Created Successfully', code: 200 , data: user};
    } catch (error){
        console.log(error)
        return {
            message: error.message,
            code: error.code,
        };
    }
}

export const delete_account = async (uid: string) => {
    try {
        const user = await admin.auth().deleteUser(uid);
        return { message: 'Deleted Successfully', code: 200 , data: user};
    } catch (error){
        console.log(error)
        return {
            message: error.message,
            code: error.code,
        };
    }
}

