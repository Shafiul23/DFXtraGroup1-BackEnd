import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const certificatesAndAwardsSchema = new mongoose.Schema(
    {
        // _id: { type: ObjectId, required: true },
        type: { type: String },
        issuer: { type: String },
        award: { type: String },
        grade: { type: String },
        year: { type: String },
        weight: { type: String },
        priority: { type: String },
        description: { type: String }
    }
)

export default mongoose.model('certificatesAndAwards', certificatesAndAwardsSchema);
