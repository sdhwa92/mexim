import type { NextApiRequest, NextApiResponse } from "next";
import type { IContactBody } from "@/interfaces";

interface ContactApiRequest extends NextApiRequest {
  body: IContactBody;
}

export default function handler(req: ContactApiRequest, res: NextApiResponse) {
  const { firstName, lastName, email, company, phone, message } = req.body;

  if (req.method === "POST") {
    if (!firstName || !lastName || !email || !company || !message) {
      return res.status(400).json({ message: "Bad Request" });
    }
    return res.status(200).json({
      message: `Hello, ${firstName} ${lastName} from ${company}. I will call you back to ${phone} or send an email to ${email} regarding your message: ${message}`,
    });
  } else {
    return res.status(400).json({ message: "Bad Request" });
  }
}
