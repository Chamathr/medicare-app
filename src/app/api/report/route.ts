import {
  createReport,
  updateReport,
  getReport,
  deleteReport,
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

/**
 * upadte a report reports
 * @param request
 * @returns
 */
const PUT = async (request: Request) => {
  try {
    await connectDB();

    const body = await request.json();
    const { searchParams } = new URL(request?.url);
    const id = searchParams.get("id") as string;

    const response = await updateReport({
      id,
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

    const { searchParams } = new URL(request?.url);
    const id = searchParams.get("id") as string;
    const response = await getReport(id);

    return Response.json({ data: response });
  } catch (error) {
    console.log("Error", error);
    return Response.error();
  }
};

/**
 * delete a report by id
 * @param request
 * @returns
 */
const DELETE = async (request: Request) => {
  try {
    await connectDB();

    const { searchParams } = new URL(request?.url);
    const id = searchParams.get("id") as string;
    const response = await deleteReport(id);

    return Response.json({ data: response });
  } catch (error) {
    console.log("Error", error);
    return Response.error();
  }
};

export { POST, GET, PUT, DELETE };
