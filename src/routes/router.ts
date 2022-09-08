import express from 'express';
import { home } from '@/controllers/homeController';
import { create_user, get_users, get_user } from '@/controllers/userController';

const router = express.Router();

router.get('/', home);
router.get('/customer/', get_users)
router.get('/customer/:id', get_user)
router.put('/customer', create_user)

export default function initRouter(app: express.Application) {
  app.use(express.json())
  app.use(router);
}
