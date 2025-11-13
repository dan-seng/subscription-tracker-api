import { Router } from 'express';
import { cancelSubscription, createSubscription, deleteSubscription, getAllSubscriptions, getSubscriptionById, getUpcomingRenewals, getUserSubscriptions, updateSubscription } from '../controllers/subscription.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const route = Router();

route.get('/', authorize, getAllSubscriptions);
route.get('/:id',  authorize, getSubscriptionById);
route.post('/', authorize, createSubscription);
route.put('/:id', authorize, updateSubscription);
route.delete('/:id', authorize, deleteSubscription);
route.get('/user/:id', authorize, getUserSubscriptions);
route.put('/:id/cancel', authorize, cancelSubscription);
route.get('/upcoming-renewals', authorize, getUpcomingRenewals);



export default route;