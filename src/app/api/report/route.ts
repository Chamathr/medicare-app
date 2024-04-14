import { createReport, updateReport, getReport } from "@/server/services/report.service";
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

/**
 * upadte a report reports
 * @param request
 * @returns
 */
const PUT = async (request: Request) => {
  try {
    await connectDB();

    const body = await request.json();

    const response = await updateReport({
      id: "661b6e5289d2da400d7be015",
      data: body,
    });

    return Response.json({ data: response });
  } catch (error) {
    console.log("Error", error);
    return Response.error();
  }
};

/**
 * get report by id
 * @param request 
 * @returns 
 */
const GET = async (request: Request) => {
  try {
    await connectDB();

    const response = await getReport("661b6e5289d2da400d7be015");

    return Response.json({ data: response });
  } catch (error) {
    console.log("Error", error);
    return Response.error();
  }
};

export { POST, GET, PUT };
