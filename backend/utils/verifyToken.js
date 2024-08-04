import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  return jwt.verify(token,'SFADJGGJ' , (err, decoded) => {
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });
};