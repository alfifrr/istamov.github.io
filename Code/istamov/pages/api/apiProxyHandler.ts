// Next API routes
import type { NextApiRequest, NextApiResponse } from "next";
import api from "../../lib/axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { endpoint } = req.query;

  if (!endpoint || typeof endpoint !== "string") {
    return res.status(400).json({
      error: "Endpoint query parameter is required and must be a string",
    });
  }

  api
    .get(endpoint)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

export default handler;
