import { createUser } from '../../repository/users/createUser';
import { findUsersByEmailAndUsername } from '../../repository/users/findUsersByEmailAndUsername';
import { IUser } from '../../type/user.type';

export const registerAction = async (body: IUser) => {
  const users = await findUsersByEmailAndUsername(body.email, body.username);

  if (users.length) {
    return {
      status: 400,
      message: 'email or username already exist',
    };
  }

  const create = await createUser(body);
  try {
    return {
      status: 200,
      create,
    };
  } catch (error) {
    console.log(error);

    throw error;
  }
};
