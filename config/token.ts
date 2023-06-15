import jwt from "jsonwebtoken";
const SECRET = "grupo2";

interface Payload {
  email: string;
  name: string;
}
export function generateToken(payload: Payload): string {
  const token: string = jwt.sign({ payload }, SECRET, {
    expiresIn: "2h"
  });

  return token;
}

export function validateToken(token: string): object | string {
  return jwt.verify(token, SECRET);
}
