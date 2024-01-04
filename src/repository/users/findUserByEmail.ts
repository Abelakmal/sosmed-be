import { prisma } from '../../helper/prisma';

export const findUserByEmail = async (email: string) => {
  try {
    const user = await prisma.users.findUnique({
      where: { email },
    });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
