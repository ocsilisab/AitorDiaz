import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="border-b-2 border-primary/30">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-semibold tracking-tight text-primary-strong dark:text-primary"
        >
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {siteConfig.nav
            .filter((item) => item.href !== "/contacto")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-primary-strong dark:hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          <Link
            href="/contacto"
            className="flex h-9 items-center justify-center rounded-full bg-primary px-4 text-white transition-colors hover:bg-primary-strong"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
