import express from 'express';
import { home } from '@/controllers/homeController';
import { create_user, get_users, get_user, create_vendor, edit_user } from '@/controllers/userController';
import {
  create_facility,
  edit_facility,
  get_facility,
  list_facilities,
  list_facilities_all,
  facility_filter
} from '@/controllers/facilityController';
import {
  create_session,
  delete_session,
} from '@/controllers/sessionController';
import { create_slot, slot_filter } from '@/controllers/slotController';
import { create_booking, get_booking, list_bookings } from '@/controllers/bookingController';
import { get_vendor_profile, edit_vendor_profile, create_vendor_profile } from '@/controllers/vendorProfileController';
import { send_whatsApp_API, gen_otp, verify_otp } from '@/controllers/twilioController';
import { uploadFile } from "@/controllers/aws/storageController"
const router = express.Router();


const multer = require('multer');

//Define where project photos will be stored
var storage = multer.diskStorage({
  destination: function (_: any, file: any, callback: any) {
    callback(null, './public/uploads');
  },
  filename: (_: any, file: any, cb: any) => {
    cb(null, file.originalname.replace(" ", "-"));
  },
});

const upload = multer({ // https://github.com/expressjs/multer
  storage: storage,
  limits: { fileSize: 10000000 }
});

router.get('/', home);
router.put('/session/', create_session);
router.delete('/session/:id', delete_session);
router.get('/user/:type/all', get_users)
router.get('/user/:id', get_user);
router.post('/user/:id', edit_user);
router.put('/customer', create_user);
router.put('/vendor', create_vendor);
router.get('/vendor/profile/:id', get_vendor_profile);
router.put('/vendor/profile', create_vendor_profile);
router.post('/vendor/profile', edit_vendor_profile);
router.put('/facility', create_facility);
router.post('/facility/:id', edit_facility);
router.get('/facility/:id', get_facility);
router.get('/facility', list_facilities);
router.get('/facility/all/:page/:size', list_facilities_all);
router.get('/facility/filter/:page/:size', facility_filter);
router.get('/slot/:facility/:date', slot_filter);
router.put('/slot', create_slot)
router.put('/booking', create_booking)
router.get('/booking/:booking', get_booking)
router.get('/booking/:page/:size', list_bookings)
router.post('/twilio', send_whatsApp_API);
router.post('/gen_otp', gen_otp);
router.post('/verify_otp', verify_otp);
router.put('/upload', upload.array('files', 10), uploadFile)
export default function initRouter(app: express.Application) {
  app.use(express.json());
  app.use(router);
}
