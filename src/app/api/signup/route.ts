import connectDB from "@/app/utils/connectDB";

const GET = async (request: Request) => {
    connectDB();

    return Response.json({ "data": "Test data" })
}

export { GET };