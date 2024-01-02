//@ts-nocheck

import { connectDb } from "@/lib/connectDb"
import prisma from "@/lib/db"

const fetchDB = async()=>{

    await connectDb()
    const DBONE = await prisma.DBOne.findMany({})
    return DBONE
    
}

export default fetchDB