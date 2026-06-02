import { NextResponse } from "next/server";

export async function GET() {

  const response = await fetch(
    "https://app.geckoterminal.com/api/p1/candlesticks/317742214/72572945?resolution=15&from_timestamp=1779973680&to_timestamp=1780269780&for_update=false&count_back=329&currency=usd&is_inverted=false",
    {
      cache: "no-store",
    }
  );

  const data = await response.json();

  return NextResponse.json(data);

}