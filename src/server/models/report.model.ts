import mongoose, { Schema, Document } from "mongoose";

interface IReprtDetails {
  [key: string]: string | number | boolean;
}

export interface IReport extends Document {
  name: string;
  age: number;
  email: string;
  report: IReprtDetails;
  score: number;
}

const ReportSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  report: { type: Schema.Types.Mixed, required: true },
  score: { type: Number, required: true },
});

export default mongoose.models.Report ||
  mongoose.model<IReport>("Report", ReportSchema);
