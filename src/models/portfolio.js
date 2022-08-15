import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const portfolioSchema = new mongoose.Schema(
    {
        // _id: { type: ObjectId, required: true },
        title: { type: String },
        url: { type: String },
        year: { type: String },
        weight: { type: String },
        priority: { type: Number },
        description: { type: String }
    }
)

export default mongoose.model('portfolio', portfolioSchema);
