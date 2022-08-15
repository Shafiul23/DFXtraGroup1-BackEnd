import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const degreesSchema = new mongoose.Schema(
    {
        // _id: { type: ObjectId, required: true },
        university: { type: String },
        degreeSubject: { type: String },
        degreeLevel: { type: String },
        grade: { type: String },
        fromDate: { type: String },
        toDate: { type: String },
        weight: { type: String },
        priority: { type: String },
        description: { type: String }
    }
)

export default mongoose.model('degrees', degreesSchema);
