import {
  createReport
} from "@/server/services/report.service";
import connectDB from "@/utils/connectDB";

/**
 * add a new report
 * @param request
 * @returns
 */
const POST = async (request: Request) => {
  try {
    await connectDB();

    const body = await request.json();

    const response = await createReport(body);

    return Response.json({ data: response });
  } catch (error) {
    console.log("Error", error);
    return Response.error();
  }
};

export { POST };
