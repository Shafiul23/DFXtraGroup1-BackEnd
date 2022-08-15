import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const workExperienceSchema = new mongoose.Schema(
    {
        // _id: { type: ObjectId, required: true },
        type: { type: String },
        employer: { type: String },
        position: { type: String },
        fromDate: { type: String },
        toDate: { type: String },
        weight: { type: String },
        priority: { type: String },
        description: { type: String },
    }
)

export default mongoose.model('workExperience', workExperienceSchema);
