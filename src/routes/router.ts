import express from 'express';
import { home } from '@/controllers/homeController';
import { create_user, get_users, get_user, create_vendor, edit_user } from '@/controllers/userController';
import {
  create_facility,
  edit_facility,
  get_facility,
  list_facilities,
  list_facilities_all,
} from '@/controllers/facilityController';
import {
  create_session,
  delete_session,
} from '@/controllers/sessionController';
const router = express.Router();

router
  .get('/', home)
  .put('/session/', create_session)
  .delete('/session/:id', delete_session)
  .get('/customer/', get_users)
  .get('/customer/:id', get_user)
  .put('/customer', create_user)
  .put('/vendor', create_vendor)
  .post('/vendor/:id', edit_user)
  .put('/facility', create_facility)
  .get('/facility/:id', get_facility)
  .post('/facility/:id', edit_facility)
  .get('/facility', list_facilities)
  .get('/facility/all/:page/:size', list_facilities_all)
export default function initRouter(app: express.Application) {
  app.use(express.json());
  app.use(router);
}
