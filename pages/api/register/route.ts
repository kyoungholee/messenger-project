import bcrypt from "bcrypt";
import AuthForm from "@/pages/(site)/components/AuthForm";

import prisma from "@/pages/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("여기입니다!!!");
  const body = await request.json();
  const { name, email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
