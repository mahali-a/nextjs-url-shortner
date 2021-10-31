import upstash from "@upstash/redis";
import generateRandomString from "./random";

const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = process.env;

const redis = upstash(UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN);

export async function createShortUrl(url: string): Promise<string> {
  const short = generateRandomString();
  await redis.set(`short/${short}`, url);
  return short;
}

export async function getLongUrl(path: string): Promise<string> {
  const { data } = await redis.get(`short/${path}`);
  return data;
}
