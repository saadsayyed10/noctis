import prisma from "../lib/prisma";

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to PostgreSQL DB");
  } catch (error: any) {
    console.log(`Failed to connect PostreSQL DB: ${error.message}`);
  }
};
