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
const router = express.Router();

router.get('/', home);
router.put('/session/', create_session);
router.delete('/session/:id', delete_session);
router.get('/customer/', get_users);
router.get('/customer/:id', get_user);
router.put('/customer', create_user);
router.put('/vendor', create_vendor);
router.put('/facility', create_facility);
router.get('/facility/:id', get_facility);
router.get('/facility', list_facilities);
router.get('/facility/all/:page/:size', list_facilities_all);
router.get('/facility/filter/:page/:size', facility_filter);
router.get('/slot/:facility/:date', slot_filter);
router.put('/slot', create_slot)
export default function initRouter(app: express.Application) {
  app.use(express.json());
  app.use(router);
}
