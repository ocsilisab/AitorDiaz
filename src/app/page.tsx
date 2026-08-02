import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-8 px-6 py-24">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold text-secondary-strong dark:text-secondary">
          {siteConfig.name}
        </p>
        <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
          {siteConfig.tagline}
        </h1>
        <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {siteConfig.description}
        </p>
      </div>
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <Link
          href="/servicios"
          className="flex h-12 items-center justify-center rounded-full bg-primary px-6 text-white transition-colors hover:bg-primary-strong"
        >
          Ver servicios
        </Link>
        <Link
          href="/contacto"
          className="flex h-12 items-center justify-center rounded-full border border-secondary px-6 text-secondary-strong transition-colors hover:bg-secondary/10 dark:text-secondary"
        >
          Contactar
        </Link>
      </div>
    </div>
  );
}
