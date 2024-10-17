import mongoose from 'mongoose';
import Bid from './bid.model.js';

const userSchema = new mongoose.Schema({
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
    bids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bid"
    }]
}, {
    timestamps: true
});

// Check if the model is already compiled to prevent the overwrite error
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
