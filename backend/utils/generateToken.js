import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, 'SFADJGGJ', { expiresIn: "3d" });
};

export default generateToken;