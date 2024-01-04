import prisma from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const posts = await prisma.po.findMany();

    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}
