import mongoose from 'mongoose';
import Bid from './bid.model';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['farmer', 'industry', 'government'],
        required: true,
    },
    detailsReceived: {
        type: Boolean,
        default: false,
    },
    bids:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bid'

    }]
  
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
