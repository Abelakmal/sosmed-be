import { prisma } from '../../helper/prisma';
import { IUser } from '../../type/user.type';

export const createUser = async (body: IUser,image:string) => {
  try {
    const data = {
      username: body.username,
      email: body.email,
      password: body.password,
      image
    };

    const user = await prisma.users.create({
      data,
    });
    return user;
  } catch (error) {
    console.log(error);

    throw error;
  }
};
