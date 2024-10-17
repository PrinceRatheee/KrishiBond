import mongoose from 'mongoose';

const deliverySchema = mongoose.Schema({
    contract: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Contract',
    },
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
    deliveryStatus: {
        type: String,
        enum: ['pending', 'in-transit', 'delivered', 'cancelled'],
        default: 'pending',
    },
    cancellationReason: {
        type: String,
        enum: ['farmer_cancelled', 'industry_cancelled', 'climate_issue', 'other'],
        default: null,
    },
    cancellationDetails: {
        type: String,
        default: null,
    },
    isCompensationRequired: {
        type: Boolean,
        default: false,
    },
    compensationAmount: {
        type: Number,
        default: 0,
    },
    deliveryDate: {
        type: Date,
        default: null,
    },
}, {
    timestamps: true
});

const Delivery = mongoose.model('Delivery', deliverySchema);

export default Delivery;
