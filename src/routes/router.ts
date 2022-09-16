import express from 'express';
import { home } from '@/controllers/homeController';
import { create_user, get_users, get_user } from '@/controllers/userController';
import { create_facility, get_facility, list_facilities } from '@/controllers/facilityController';
import { create_session, delete_session } from '@/controllers/sessionController';
const router = express.Router();

router.get('/', home);
router.put('/session/', create_session)
router.delete('/session/:id', delete_session)
router.get('/customer/', get_users)
router.get('/customer/:id', get_user)
router.put('/customer', create_user)
router.put('/facility', create_facility)
router.get('/facility/:id', get_facility)
router.get('/facility', list_facilities)
export default function initRouter(app: express.Application) {
  app.use(express.json())
  app.use(router);
}
