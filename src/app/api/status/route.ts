import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const https = forwardedProto ? forwardedProto === "https" : request.nextUrl.protocol === "https:";

  return Response.json({
    https,
    env: process.env.NODE_ENV,
    uptimeSeconds: Math.floor(process.uptime()),
    serverTime: new Date().toISOString(),
  });
}
