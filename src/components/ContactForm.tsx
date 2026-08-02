"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "@/app/contacto/actions";

const initialState: ContactState = { status: "idle" };

const inputClasses =
  "rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent px-3 py-2 text-black dark:text-zinc-50 outline-none focus:border-primary dark:focus:border-primary";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState
  );

  return (
    <form action={formAction} className="flex max-w-md flex-col gap-4">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          Nombre
        </label>
        <input id="name" name="name" required className={inputClasses} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="flex h-12 w-fit items-center justify-center rounded-full bg-primary px-6 text-base font-medium text-white transition-colors hover:bg-primary-strong disabled:opacity-60"
      >
        {isPending ? "Enviando…" : "Enviar mensaje"}
      </button>

      {state.status === "success" && (
        <p className="text-sm font-medium text-secondary-strong dark:text-secondary">
          {state.message}
        </p>
      )}
      {state.status === "error" && (
        <p className="text-sm font-medium text-accent">{state.message}</p>
      )}
    </form>
  );
}
