import jwt from "jsonwebtoken";
const SECRET: string = "grupo2";

export function generateToken(payload: Object): string {
  const token: string = jwt.sign({ payload }, SECRET, {
    expiresIn: "2h",
  });

  return token;
}

export function validateToken(token: string): object | string {
  return jwt.verify(token, SECRET);
}
