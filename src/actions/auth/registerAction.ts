import { hashPassword } from '../../helpers/bcrypt';
import { createUser } from '../../repository/users/createUser';
import { findUsersByEmailAndUsername } from '../../repository/users/findUsersByEmailAndUsername';
import { IUser } from '../../type/user.type';

export const registerAction = async(body: IUser) => {
  const { email, username, password } = body;
  const users = await findUsersByEmailAndUsername(email, username);

  if (users.length) {
    return {
      status: 400,
      message: 'email or username already exist',
    };
  }
  const hashedPassword = await hashPassword(password);
  body.password = hashedPassword;
  await createUser(body);
  try {
    return {
      status: 200,
      message: "Register new user success"
    };
  } catch (error) {
    console.log(error);

    throw error;
  }
};
