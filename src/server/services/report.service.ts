import Report, { IReport } from "../models/report.model";

const getReportList = async () => {
  try {
    const report = await Report.find({});
    return report;
  } catch (error) {
    throw error;
  }
};

/**
 * create a new report
 * @param data
 * @returns
 */
const createReport = async (data: IReport) => {
  try {
    const { guardianEmail } = data;
    const existingUser = await Report.findOne({ email: guardianEmail });
    if (existingUser) {
      throw new Error("User is already exists");
    }
    const reportData = new Report(data);
    await reportData.save();
    return reportData;
  } catch (error) {
    throw error;
  }
};

/**
 * update a report
 * @param param0
 * @returns
 */
const updateReport = async ({ id, data }: { id: string; data: IReport }) => {
  try {
    const report = await Report.findByIdAndUpdate(id, data, { new: true });
    if (!report) {
      throw new Error("User not found");
    }
    return report;
  } catch (error) {
    throw error;
  }
};

/**
 * get a report by id
 * @param id
 * @returns
 */
const getReport = async (id: string) => {
  try {
    const report = await Report.findById(id);
    if (!report) {
      throw new Error("User not found");
    }
    return report;
  } catch (error) {
    throw error;
  }
};

/**
 * delete a report by id
 * @param id
 * @returns
 */
const deleteReport = async (id: string) => {
  try {
    const report = await Report.findByIdAndDelete(id);
    if (!report) {
      throw new Error("User not found");
    }
    return report;
  } catch (error) {
    throw error;
  }
};

export { createReport, updateReport, getReport, deleteReport, getReportList };
