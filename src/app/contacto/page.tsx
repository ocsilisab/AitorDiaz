import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto para hablar sobre tu proyecto.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-24">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Contacto
        </h1>
        <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Cuéntame en qué puedo ayudarte y te responderé lo antes posible.
        </p>
      </div>

      <ContactForm />

      <p className="text-sm text-zinc-500">
        También puedes escribirme directamente a{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-primary-strong underline dark:text-primary"
        >
          {siteConfig.email}
        </a>
        .
      </p>
    </div>
  );
}
