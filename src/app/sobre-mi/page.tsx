import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Aitor Díaz Santana, desarrollador freelance full stack y Odoo.",
};

export default function SobreMiPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-24">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Sobre mí
        </h1>
        <span className="h-1 w-12 rounded-full bg-accent" aria-hidden />
      </div>

      <div className="flex max-w-2xl flex-col gap-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        <p>
          Soy Aitor Díaz Santana, desarrollador Full Stack especializado en
          desarrollo web y Odoo.
        </p>
        <p>
          Cuento con 2 años de experiencia desarrollando soluciones sobre
          Odoo, creando módulos personalizados, automatizaciones e
          integraciones adaptadas a las necesidades de cada proyecto.
        </p>
        <p>
          Además, desarrollo páginas web modernas, rápidas y totalmente
          responsive para empresas, profesionales y pequeños negocios,
          utilizando tecnologías como React, Next.js y TypeScript.
        </p>
        <p>
          Me gusta crear software útil, con un código limpio, mantenible y
          orientado al rendimiento. Entre mis proyectos destaca Diagramas
          Odoo, una aplicación de escritorio desarrollada para facilitar el
          diseño y desarrollo de módulos de Odoo.
        </p>
        <p>
          Mi objetivo es ayudar a empresas y profesionales a digitalizar sus
          procesos y ofrecer soluciones fiables que aporten valor desde el
          primer día.
        </p>
      </div>

      <Link
        href="/contacto"
        className="flex h-12 w-fit items-center justify-center rounded-full bg-primary px-6 text-base font-medium text-white transition-colors hover:bg-primary-strong"
      >
        Hablemos de tu proyecto
      </Link>
    </div>
  );
}
