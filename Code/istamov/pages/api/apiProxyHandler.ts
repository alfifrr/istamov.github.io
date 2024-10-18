// Next API routes
import type { NextApiRequest, NextApiResponse } from "next";
import api from "@/lib/axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { endpoint } = req.query;

  if (!endpoint || typeof endpoint !== "string") {
    return res.status(400).json({
      error: "Endpoint query parameter is required and must be a string",
    });
  }

  try {
    const response = await api.get(endpoint);
    res.status(200).json(response.data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

export default handler;
