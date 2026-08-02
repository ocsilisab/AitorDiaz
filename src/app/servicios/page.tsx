import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Webs sencillas y módulos de Odoo a medida.",
};

const services = [
  {
    title: "Webs sencillas",
    price: "400 € – 700 €",
    description:
      "Páginas web sencillas para negocios y profesionales: una web de presentación clara, lista para publicar.",
    items: ["Precio según alcance del proyecto"],
  },
  {
    title: "Módulos de Odoo",
    description: "Desarrollo de módulos de Odoo a medida.",
    items: ["Presupuesto según alcance del proyecto"],
  },
];

export default function ServiciosPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-6 py-24">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Servicios
        </h1>
        <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Trabajo en dos áreas: webs sencillas y módulos de Odoo a medida.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-3 border-t-2 border-primary/20 pt-8"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-xl font-semibold text-primary-strong dark:text-primary">
                {service.title}
              </h2>
              {"price" in service && (
                <span className="text-sm font-semibold text-secondary-strong dark:text-secondary">
                  {service.price}
                </span>
              )}
            </div>
            <p className="max-w-lg text-zinc-600 dark:text-zinc-400">
              {service.description}
            </p>
            <ul className="flex flex-col gap-1.5 text-zinc-600 dark:text-zinc-400">
              {service.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="text-secondary-strong dark:text-secondary">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link
        href="/contacto"
        className="flex h-12 w-fit items-center justify-center rounded-full bg-primary px-6 text-base font-medium text-white transition-colors hover:bg-primary-strong"
      >
        Solicitar presupuesto
      </Link>
    </div>
  );
}
