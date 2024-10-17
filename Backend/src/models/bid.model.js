import mongoose from 'mongoose';

const bidSchema = mongoose.Schema({
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    demand: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Demand',
    },
    amount: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
});

const Bid = mongoose.model('Bid', bidSchema);

export default Bid;
