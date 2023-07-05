import { IContactBody } from "@/interfaces";

export const sendContactForm = async (data: IContactBody) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application.json",
    },
  });
