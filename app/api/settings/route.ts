import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { name, image } = body;

    if (!currentUser?.id) {
      return new NextResponse("Unauthorizes", { status: 401 });
    }

    const updateUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        image: image,
        name: name,
      },
    });

    return NextResponse.json(updateUser);
  } catch (error) {
    console.log(error, "ERROR_SETTINGS");
    return new NextResponse("Initial Error", { status: 500 });
  }
}
