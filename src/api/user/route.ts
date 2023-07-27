import { user } from "../../../data/user";
import { NextResponse } from "next/server";


export async function GET(res: any) {
    res.status(200).json(user)
    const data = res.json()
    return NextResponse.json({data})
}
