import {
  updateReport,
  getReport,
  deleteReport,
} from "@/server/services/report.service";
import connectDB from "@/utils/connectDB";

export const revalidate = 1

/**
 * upadte a report reports
 * @param request
 * @returns
 */
const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDB();

    const body = await request.json();

    const response = await updateReport({
      id: params.id,
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
const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDB();

    const response = await getReport(params.id);

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
const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
  try {
    await connectDB();

    const response = await deleteReport(params.id);

    return Response.json({ data: response });
  } catch (error) {
    console.log("Error", error);
    return Response.error();
  }
};

export { GET, PUT, DELETE };
