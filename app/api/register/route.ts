import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  // Awaits the json() method of the request object to parse the incoming request body and store it in the body variable
  const body = await request.json();
  // Use object destructuring to extract the email, name, and password properties from the body object
  const { email, name, password } = body;
  // Use the bcrypt.hash() function to hash the password variable with a cost factor of 12
  const hashedPassword = await bcrypt.hash(password, 12);
  // Use the prisma.user.create() method to create a new user record in the database
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
