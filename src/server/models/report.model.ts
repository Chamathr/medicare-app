import mongoose, { Schema, Document } from "mongoose";

interface IReprtDetails {
  [key: string]: string | number | boolean;
}

export interface IReport extends Document {
  childName: string;
  childDateOfBirth: string;
  childGender: string;
  childBirthCertificate: string;
  guardianName: string;
  guardianAddress: string;
  guardianEmail: string;
  guardianPhone: string;
  report: IReprtDetails;
  score: number;
}

const ReportSchema: Schema = new Schema({
  childName: { type: String, required: true },
  childDateOfBirth: { type: String, required: true },
  childGender: { type: String, required: true },
  childBirthCertificate: { type: String, required: true },
  guardianName: { type: String, required: true },
  guardianAddress: { type: String, required: true },
  guardianEmail: { type: String, required: true },
  guardianPhone: { type: String, required: true },
  report: { type: Schema.Types.Mixed, required: true },
  score: { type: Number, required: true },
});

export default mongoose.models.Report ||
  mongoose.model<IReport>("Report", ReportSchema);
