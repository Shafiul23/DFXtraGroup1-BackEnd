import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const schoolQualificationSchema = new mongoose.Schema(
    {
        // _id : {type: ObjectId, required: true},
        school: { type: String },
        examType: { type: String },
        subject: { type: String },
        grade: { type: String },
        year: { type: String },
        weight: { type: String },
        priority: { type: String },
        description: { type: String },
    }
)


export default schoolQualificationSchema;
