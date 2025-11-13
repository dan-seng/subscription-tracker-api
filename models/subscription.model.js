import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "subscription name is required"],
        trim: true,
        maxlength: [100, "subscription name cannot exceed 100 characters"],
        minlength: [2, "subscription name must be at least 2 characters long"],
    },
    price:{
        type: Number,
        required: true,
        min: [0, "Price must be above or equal to 0"],
    },
    currency:{
        type: String,
        required: true,
        enum: ['USD', 'EUR', 'GBP', 'INR', 'ETB'],
        default: 'ETB',
    },
    frequency:{
        type: String,
        enum: ['monthly', 'yearly', 'weekly', 'daily'],
    },
    category:{
        type: String,
        enum: ['entertainment', 'education', 'productivity', 'health', 'other'],
        required: true,
    },
    paymentMethod:{
        type: String,
        required: true,
        trim: true,   
    },
    status:{
        type: String,
        enum: ['active', 'expired', 'canceled', 'paused'],
        default: 'active',
    },
    startDate:{
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: "Start date cannot be in the future",
        },
    },
    renewalDate:{
        type: Date,
        validate: {
            validator: function(value) {
                return value > this.startDate;
            },
            message: "Renewal date must be after the start date",
        },
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },

}, {timestamps: true});

//Auto calculate renewal date if missing
subscriptionSchema.pre('save', function(next){
 if(!this.renewalDate){
    const renewalPeriods = {
        'daily': 1,
        'weekly': 7,
        'monthly': 30,
        'yearly': 365,
    };
    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
 }
 //Auto-update status if renewal date has passed
 if(this.renewalDate < new Date()){
    this.status = 'expired';
}

    next();
})






const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;