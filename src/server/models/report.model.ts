import mongoose, { Schema, Document } from "mongoose";

interface IReprtDetails {
  [key: string]: string | number | boolean;
}

interface IRiskFactors {
  prematureBirth: boolean;
  lowBirthWeight: boolean;
  neonatalICUStay: boolean;
  historyOfSeizures: boolean;
  geneticStructuralMalformations: boolean;
  medicationsInfectionsDuringPregnancy: boolean;
  antepartumHaemorrhage: boolean;
  hypoxicIschemicEncephalopathy: boolean;
  hydrocephalus: boolean;
  neonatalMeningitisSepsis: boolean;
  kernicterus: boolean;
  neonatalHypoglycaemia: boolean;
  cranioCerebralTrauma: boolean;
  apparentLifeThreateningEvent: boolean;
  paraSurgicalTrauma: boolean;
  neurologicalConditions?: string;
  neurologicalConditionsFamily?: string;
  specialNotes?: string;
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
  riskFactors: IRiskFactors;
  score: number;
  severityLevel: string;
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
  riskFactors: { type: Schema.Types.Mixed, required: true },
  score: { type: Number, required: true },
  severityLevel: { type: String, required: true },
});

export default mongoose.models.Report ||
  mongoose.model<IReport>("Report", ReportSchema);
