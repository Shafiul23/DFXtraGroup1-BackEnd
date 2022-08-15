import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;
import certificatesAndAwards from './certificatesAndAwards.js';
import degrees from './degrees.js';
import portfolio from './portfolio.js';
import schoolQualifications from './schoolQualifications.js';
import workExperience from './workExperience.js';

const graduateSchema = new mongoose.Schema({
    uuid: { type: Number, required: true },
    _id: { type: ObjectId, required: true },
    available: { type: Boolean, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Number, required: true },
    gender: { type: String, required: true },
    nationality: { type: String, required: true },
    personality: { type: String, required: true },
    phone: { type: Number, required: true },
    linkedIn: { type: String, required: true },
    gitHub: { type: Boolean, required: true },
    personalEmail: { type: String, required: true },
    digitalFuturesEmail: { type: String, required: true },
    degrees: [
        { type: degrees }
    ],
    schoolQualifications: [
        { type: schoolQualifications },
    ],
    workExperience: [
        { type: workExperience }
    ],
    certificatesAndAwards: [
        { type: certificatesAndAwards }
    ],
    portfolio: [
        { type: portfolio }
    ],
    personalSummary: { type: String, required: true },
    cohort: { type: String, required: true },
    learningPath: { type: String, required: true },
    trainer: { type: String, required: true },
    trainingFinishDate: { type: Number, required: true }
}, { collection: "graduate-user" });


export default mongoose.model(`Graduate`, graduateSchema);
