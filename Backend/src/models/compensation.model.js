import mongoose from 'mongoose';

const compensationSchema = mongoose.Schema({
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
    governmentOfficial: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Optional, if government approval is needed for compensation
    },
    delivery: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Delivery', // Reference to the Delivery model for cancelled deliveries
    },
    amount: {
        type: Number,
        required: true,
    },
    compensationReason: {
        type: String,
        enum: ['cancellation_by_farmer', 'cancellation_by_industry', 'climate_issue', 'delivery_failure', 'other'],
        required: true,
    },
    compensationStatus: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
    inspectionApproved: {
        type: Boolean,
        default: false,
    },
    inspectionNotes: {
        type: String,
        default: null,
    },
}, {
    timestamps: true
});

const Compensation = mongoose.model('Compensation', compensationSchema);

export default Compensation;
