import { Request, Response } from "express";
import * as userServices from "../services/user.service";

export const syncClerkUserController = async (req: Request, res: Response) => {
  let errorMessage;
  try {
    const { id, name, email, profilePicUrl } = req.body;

    const data = { id, name, email, profilePicUrl };
    if (!data) {
      errorMessage = "Required fields are missing";
      console.log(errorMessage);
      return res.status(400).json({ error: errorMessage });
    }

    const user = await userServices.syncClerkUserService(
      id,
      name,
      email,
      profilePicUrl,
    );
    res.status(201).json({ message: "User synched to database", user });
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};
