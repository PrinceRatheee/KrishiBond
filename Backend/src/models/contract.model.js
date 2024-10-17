import mongoose from 'mongoose';

const contractSchema = mongoose.Schema({
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    industry: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    demandDetails: {
        type: String,
        required: true,
    },
    contractAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'canceled'],
        default: 'pending',
    },
}, {
    timestamps: true
});

const Contract = mongoose.model('Contract', contractSchema);

export default Contract;
