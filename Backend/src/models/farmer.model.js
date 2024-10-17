import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    contact: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },

    farmSize: {
      type: Number,
      required: false,
    },
    credits: {
      type: Number,
      default: 100,
    },
    protectionFunds: {
      type: Number,
      default: 0,
    },
    smartContracts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SmartContract",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Farmer = mongoose.model("Farmer", farmerSchema);
export default Farmer;
