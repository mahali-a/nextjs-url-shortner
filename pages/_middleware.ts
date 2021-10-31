import { NextRequest, NextResponse } from "next/server";
import { getLongUrl } from "../src/utils/redis";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.split("/")[1];

  console.log(path);

  if (["", "favicon.ico", "api"].includes(path)) return;

  const url = await getLongUrl(path);

  console.log(url);

  if (url) {
    return NextResponse.redirect(url);
  }
}
