import getSession from "./getSession";
import prisma from "../libs/prismadb";

const getUser = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const user = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });

    return user;
  } catch (error) {
    return [];
  }
};

export default getUser;
