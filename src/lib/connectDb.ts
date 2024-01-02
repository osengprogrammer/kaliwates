import prisma from "./db"

export const connectDb = async()=>{
    try{
        await prisma.$connect()
    } catch(error:any){
        return new Error(error.message)
    }
}