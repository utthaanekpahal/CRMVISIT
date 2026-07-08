import bcrypt from "bcryptjs";

const password = "Superadmin@123";

const hashPassword = async () => {
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log(hashedPassword);
};

hashPassword();