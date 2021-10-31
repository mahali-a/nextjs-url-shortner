// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createShortUrl } from "../../src/utils/redis";

type Data = {
  shortURL: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url } = req.body;

  const short = await createShortUrl(url);

  res.status(200).json({ shortURL: short });
}
