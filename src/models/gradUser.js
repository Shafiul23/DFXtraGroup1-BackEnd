import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;
import certificatesAndAwards from './certificatesAndAwards';
import degrees from './degrees';
import portfolio from './portfolio';
import schoolQualifications from './schoolQualifications';
import workExperience from './workExperience';

const graduateSchema = new mongoose.Schema({
    uuid: { type: Number, require: true },
    _id: { type: ObjectId, require: true },
    available: { type: Boolean, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    dateOfBirth: { type: Number, require: true },
    gender: { type: String, require: true },
    nationality: { type: String, require: true },
    personality: { type: String, require: true },
    phone: { type: Number, require: true },
    linkedIn: { type: String, require: true },
    gitHub: { type: Boolean, require: true },
    personalEmail: { type: String, require: true },
    digitalFuturesEmail: { type: String, require: true },
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
    personalSummary: { type: String, require: true },
    cohort: { type: String, require: true },
    learningPath: { type: String, require: true },
    trainer: { type: String, require: true },
    trainingFinishDate: { type: Number, require: true }
}, { collection: "graduate-user" });


export default mongoose.model(`Graduate`, graduateSchema);
