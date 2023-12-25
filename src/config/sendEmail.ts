/* trunk-ignore-all(prettier) */
"use server";
import { NextApiResponse } from "next";
import { ContactType } from "@/components/Contact/ContactForm"; // Adjust the path accordingly
import { ReactNode } from "react"; // Import ReactNode
import { Resend } from "resend";
import { welcomeEmail } from "@/components/Contact/email-temaplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(
  data: ContactType) {
   const {firstName, emailAddress, messege} = data
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["sandangmaksum@gmail.com"],
      react: welcomeEmail({firstName, emailAddress, messege}),
      subject: "Email From BalijavaSpirit Website", 
    //   text: "Your plain text content here", // Provide the plain text content
    });

   
   
  } catch (error) {
    throw error
  }
}
