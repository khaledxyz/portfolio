import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!(url && token)) {
    return NextResponse.json(
      { error: "Missing Upstash credentials" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(`${url}/get/global-clicks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Upstash GET request failed");
    }

    return NextResponse.json({
      count: data.result ? Number.parseInt(data.result, 10) : 0,
    });
  } catch (err) {
    console.error("GET /api/clicks error:", err);
    return NextResponse.json(
      { error: "Failed to get counter" },
      { status: 500 }
    );
  }
}

export async function POST() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!(url && token)) {
    return NextResponse.json(
      { error: "Missing Upstash credentials" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(`${url}/incr/global-clicks`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Upstash POST request failed");
    }

    return NextResponse.json({
      count: data.result,
    });
  } catch (err) {
    console.error("POST /api/clicks error:", err);
    return NextResponse.json(
      { error: "Failed to increment counter" },
      { status: 500 }
    );
  }
}
