import { validateToken } from "../config/token";

export async function isAdmin(req: any, res: any, next: any) {
  const token: string | undefined = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const decodedUser: any = validateToken(token);
      if (!decodedUser.payload.isAdmin) {
        return res.status(401).send({ message: "User unathorized" });
      }
      req.user = decodedUser.payload;
      return next();
    } catch {
      return res.status(401).send({ message: "Invalid Token" });
    }
  }
  return res.status(401).send({ message: "Token not provider" });
}

export async function isDelivery(req: any, res: any, next: any) {
  const token: string | undefined = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const decodedUser: any = validateToken(token);
      if (decodedUser) {
        return next();
      }
    } catch {
      return res.status(401).send({ message: "Invalid Token" });
    }
  }
  return res.status(401).send({ message: "Token not provider" });
}
