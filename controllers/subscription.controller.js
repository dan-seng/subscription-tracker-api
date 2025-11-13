import Subscription from "../models/subscription.model.js"
import { workflowClient } from "../config/upstash.js";
import { SERVER_URL } from "../config/env.js";


export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    const { workflowRunId } = await workflowClient.trigger({
      url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
      body: {
        subscriptionId: subscription.id,
      },
      headers: {
        'content-type': 'application/json',
      },
      retries: 0,
    })

    res.status(201).json({ success: true, data: { subscription, workflowRunId } });
  } catch (e) {
    next(e);
  }
}

export const getUserSubscriptions = async (req, res, next) => {
    try {
        if(req.user.id !== req.params.id){
            const error = new Error("Unauthorized access to subscriptions");
            error.status = 401;
            throw error;
        } 
        const subscriptions = await Subscription.find({user: req.params.id});
        res.status(200).json({
            success: true,
            data: subscriptions
        });
        
    } catch (error) {
        next(error);
    }
}

export const getAllSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find();
    res.status(200).json({
      success: true,
      data: subscriptions
    });
    
  } catch (error) {
    next(error);
  }

}

export const getSubscriptionById = async (req, res, next) => {
    try {
        const subscription = await Subscription.findById(req.params.id);
        if(!subscription){
            return res.status(404).json({
                message: "Subscription not found"
            });
        }
        res.status(200).json({
            success: true,
            data: subscription
        });
    } catch (error) {
        next(error);
    }
}

export const updateSubscription = async (req, res, next) => {
   try {
    const subscription = await Subscription.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    if(!subscription){
        return res.status(404).json({
            message: "Subscription not found"
        });
    }
    res.status(200).json({
        message: "Subscription updated successfully",
        success: true,
        data: subscription
    });
    
   } catch (error) {
    next(error);
   }
}

export const deleteSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.findByIdAndDelete(req.params.id);
        if(!subscription){
            return res.status(404).json({
                message: "Subscription not found"
            });
        }
        res.status(200).json({
            message: "Subscription deleted successfully",
            success: true
        });
        
    } catch (error) {
        next(error);
    }
}

export const cancelSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.findById(req.params.id);
        if(!subscription){
            return res.status(404).json({
                message: "Subscription not found"
            });
        }
        subscription.status = 'canceled';
        await subscription.save();
        res.status(200).json({
            message: "Subscription canceled successfully",
            success: true,
            data: subscription
        });
        
    } catch (error) {
        next(error);
    }
}

export const getUpcomingRenewals = async (req, res, next) => {
    try {
        const today = new Date();
        const upcomingRenewals = await Subscription.find({
            renewalDate: {$gte: today}
        }).sort({renewalDate: 1});
        res.status(200).json({
            success: true,
            data: upcomingRenewals
        });
    } catch (error) {
        next(error);
    }
}
