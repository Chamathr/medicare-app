import { getReportList } from "@/server/services/report.service";
import connectDB from "@/utils/connectDB";

/**
 * get report list
 * @param request 
 * @returns 
 */

export const revalidate = 1

const GET = async (request: Request) => {
  try {
    await connectDB();

    const response = await getReportList();

    return Response.json({ data: response });
  } catch (error) {
    console.log("Error", error);
    return Response.error();
  }
};

export { GET };
