import { uploadImage } from '../../helper/uploadImage';
import { hashPassword } from '../../helper/bcrypt';
import { createUser } from '../../repository/users/createUser';
import { findUsersByEmailAndUsername } from '../../repository/users/findUsersByEmailAndUsername';
import { IUser } from '../../type/user.type';

export const registerAction = async(body: IUser,image:string | undefined) => {
  const { email, username, password } = body;

  console.log(uploadImage);
  uploadImage
  const users = await findUsersByEmailAndUsername(email, username);
  if(!image){
    return{
      status: 400,
      message: "image harus diisi"
    }
  }

  if (users.length) {
    return {
      status: 400,
      message: 'email or username already exist',
    };
  }
  const hashedPassword = await hashPassword(password);
  body.password = hashedPassword;
  await createUser(body,image);
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
