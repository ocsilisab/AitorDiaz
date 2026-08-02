"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  // Honeypot: campo oculto que solo rellenan los bots.
  const company = formData.get("company")?.toString().trim();

  if (company) {
    return {
      status: "success",
      message: "Gracias, tu mensaje se ha recibido. Te responderé lo antes posible.",
    };
  }

  if (!name || !email || !message) {
    return { status: "error", message: "Por favor, completa todos los campos." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Introduce un email válido." };
  }

  try {
    await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: siteConfig.email,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `De: ${name} <${email}>\n\n${message}`,
    });
  } catch (error) {
    console.error("Error enviando el mensaje de contacto:", error);
    return {
      status: "error",
      message: "No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbeme directamente.",
    };
  }

  return {
    status: "success",
    message: "Gracias, tu mensaje se ha recibido. Te responderé lo antes posible.",
  };
}
