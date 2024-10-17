import mongoose from 'mongoose';

const bidSchema = mongoose.Schema({

    user:{

    },
    status:{
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        required: true,
    },
    appliedFor:{

    },
    appliedRate:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number , //in kg 
        required: true
    },
    duration:{
        type : Number, // in days
        required: true
    }
    
}, {
    timestamps: true
});

const Bid = mongoose.model('Bid', bidSchema);

export default Bid;
