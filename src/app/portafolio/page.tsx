import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Proyectos de desarrollo web y Odoo.",
};

type Project = {
  title: string;
  kind: "propio" | "plantilla";
  description: string;
  tags: string[];
  url?: string;
  // Enlace al repositorio de código fuente en GitHub.
  repoUrl?: string;
  // Ruta bajo /public a una captura de pantalla del proyecto.
  image?: string;
  // Texto alternativo descriptivo del contenido real de la captura.
  imageAlt?: string;
  // Enlace externo al instalador (GitHub Releases u otro storage).
  downloadUrl?: string;
  downloadLabel?: string;
};

const ownProjects: Project[] = [
  {
    title: "Diagramas Odoo",
    kind: "propio",
    description:
      "Aplicación de escritorio para aprender y desarrollar módulos de Odoo: editor visual de diagramas (clases, estados, secuencia, actividad) sincronizado bidireccionalmente con el código, exploración de módulos existentes, entorno Odoo local vía Docker y asistente de IA integrado.",
    tags: ["React", "TypeScript", "Rust", "Tauri", "Docker", "Odoo"],
    image: "/diagramas-odoo-inicio.webp",
    imageAlt:
      "Pantalla de bienvenida de Diagramas Odoo, con el logo, la versión MVP Fase 1, el stack (Tauri, React, TypeScript) y los botones de buscar actualizaciones y copiar diagnóstico.",
    downloadUrl: "https://github.com/ocsilisab/diagramas-odoo-releases/releases",
  },
];

const templateProjects: Project[] = [
  {
    title: "Web para despacho de abogados",
    kind: "plantilla",
    description:
      "Muchos despachos pierden clientes potenciales porque su web no transmite confianza ni ayuda a identificar si el caso encaja. Esta plantilla lo resuelve con especialidades claras, equipo con experiencia visible, casos de éxito y un proceso de trabajo explicado paso a paso.",
    tags: ["Next.js", "React", "TypeScript"],
    url: "https://abogados-ejemplo-mghn.vercel.app/",
    repoUrl: "https://github.com/ocsilisab/abogados-ejemplo",
    image: "/abogados-ejemplo-inicio.webp",
    imageAlt:
      "Página de inicio de Aguilar & Solís Abogados, con el titular \"Defendemos tus derechos con experiencia y compromiso\" sobre una foto de rascacielos, y las cifras +20 años de experiencia, 1.500 casos resueltos y 98% de éxito.",
  },
  {
    title: "Web para clínica dental",
    kind: "plantilla",
    description:
      "Una clínica compite sobre todo en confianza y en lo fácil que resulte pedir cita; una web lenta o confusa pierde pacientes antes de que llamen. Esta plantilla prioriza pedir cita en un clic, muestra tecnología y especialidades arriba, y opiniones reales sin scroll excesivo.",
    tags: ["Next.js", "React", "TypeScript"],
    url: "https://clinica-ejemplo-puce.vercel.app/",
    repoUrl: "https://github.com/ocsilisab/clinica-ejemplo",
    image: "/clinica-ejemplo-inicio.webp",
    imageAlt:
      "Página de inicio de la clínica dental Dental Bravo, con el titular \"Tu sonrisa, en las mejores manos\", una foto del gabinete dental y el botón de pedir cita.",
  },
  {
    title: "Web para restaurante",
    kind: "plantilla",
    description:
      "Un restaurante vende una experiencia antes de que el cliente entre por la puerta: fotos pobres o una carta difícil de encontrar hacen perder la reserva. Esta plantilla resuelve eso con un hero fotográfico fuerte, carta y galería a un clic, y reserva online desde el primer scroll.",
    tags: ["Next.js", "React", "TypeScript"],
    url: "https://restaurante-ejemplo-six.vercel.app/",
    repoUrl: "https://github.com/ocsilisab/restaurante_ejemplo",
    image: "/restaurante-ejemplo-inicio.webp",
    imageAlt:
      "Página de inicio del restaurante Aurelia, con el titular \"La excelencia gastronómica comienza aquí\" sobre una foto de mesa servida, y el botón de reservar mesa.",
  },
  {
    title: "Web para gimnasio",
    kind: "plantilla",
    description:
      "Un gimnasio necesita comunicar resultados y comunidad, no solo instalaciones, para justificar una cuota mensual. Esta plantilla lo resuelve con métricas sociales, planes comparables con precio claro, y clases y entrenadores visibles para reducir la incertidumbre antes de apuntarse.",
    tags: ["Next.js", "React", "TypeScript"],
    url: "https://gimmnasio-ejemplo.vercel.app/",
    repoUrl: "https://github.com/ocsilisab/gimmnasio_ejemplo",
    image: "/gimnasio-ejemplo-inicio.webp",
    imageAlt:
      "Página de inicio del gimnasio FORJA, con el titular \"Transforma tu cuerpo. Supera tus límites.\" sobre una foto de la sala de máquinas, y las cifras +500 clientes y 4.9 de valoración.",
  },
  {
    title: "Web para inmobiliaria",
    kind: "plantilla",
    description:
      "En el sector inmobiliario de alto standing, el buscador de propiedades es lo que decide si el visitante se queda o se va a la competencia. Esta plantilla lo integra directamente en el hero, junto con cifras de trayectoria como prueba social y contacto directo con agentes.",
    tags: ["Next.js", "React", "TypeScript"],
    url: "https://inmobiliaria-ejemplo-psi.vercel.app/",
    repoUrl: "https://github.com/ocsilisab/inmobiliaria_ejemplo",
    image: "/inmobiliaria-ejemplo-inicio.webp",
    imageAlt:
      "Página de inicio de la inmobiliaria Aurea Living, con el titular \"Encuentra el hogar perfecto para tu próxima etapa\" y un buscador de propiedades por compra o alquiler.",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4 border-t-2 border-primary/20 pt-8">
      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-black/[.08] dark:border-white/[.145]">
          <Image
            src={project.image}
            alt={project.imageAlt ?? `Captura de pantalla de ${project.title}`}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
          {project.title}
        </h3>
        <span
          className={
            project.kind === "propio"
              ? "rounded-full bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary-strong dark:text-primary"
              : "rounded-full bg-black/[.06] px-2 py-0.5 text-xs font-semibold text-zinc-600 dark:bg-white/[.08] dark:text-zinc-400"
          }
        >
          {project.kind === "propio" ? "Proyecto propio" : "Plantilla de demostración"}
        </span>
      </div>
      <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 text-xs">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-secondary/40 px-2 py-0.5 text-secondary-strong dark:text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 pt-2 text-sm font-medium">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 items-center justify-center rounded-full border border-primary px-5 text-primary-strong transition-colors hover:bg-primary/10 dark:text-primary"
          >
            Ver proyecto
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 items-center justify-center rounded-full border border-black/[.15] px-5 text-zinc-700 transition-colors hover:bg-black/[.04] dark:border-white/[.2] dark:text-zinc-300 dark:hover:bg-white/[.06]"
          >
            Ver código
          </a>
        )}
        {project.downloadUrl && (
          <a
            href={project.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-secondary px-5 text-white transition-colors hover:bg-secondary-strong"
          >
            <span aria-hidden>⬇</span>
            {project.downloadLabel ?? "Descargar para Windows"}
          </a>
        )}
      </div>
    </div>
  );
}

export default function PortafolioPage() {
  const hasProjects = ownProjects.length + templateProjects.length > 0;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-16 px-6 py-24">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Portafolio
        </h1>
        <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Una selección de proyectos de desarrollo web y Odoo.
        </p>
      </div>

      {!hasProjects ? (
        <div className="flex flex-col gap-4 border-t border-black/[.08] pt-8 dark:border-white/[.145]">
          <p className="max-w-lg text-zinc-600 dark:text-zinc-400">
            Estoy preparando esta sección con proyectos recientes. Mientras
            tanto, escríbeme y hablamos directamente sobre tu proyecto.
          </p>
          <Link
            href="/contacto"
            className="flex h-12 w-fit items-center justify-center rounded-full bg-primary px-6 text-base font-medium text-white transition-colors hover:bg-primary-strong"
          >
            Contactar
          </Link>
        </div>
      ) : (
        <>
          {ownProjects.length > 0 && (
            <div className="flex flex-col gap-3">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
                Proyectos propios
              </h2>
              <div className="flex flex-col gap-12">
                {ownProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          )}

          {templateProjects.length > 0 && (
            <div className="flex flex-col gap-3">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
                Plantillas de demostración
              </h2>
              <p className="max-w-lg text-sm text-zinc-500 dark:text-zinc-500">
                Sitios que he construido por iniciativa propia para mostrar
                cómo resolvería una web de este tipo, no encargos de clientes
                reales.
              </p>
              <div className="flex flex-col gap-12">
                {templateProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4 border-t border-black/[.08] pt-8 dark:border-white/[.145]">
            <p className="max-w-lg text-zinc-600 dark:text-zinc-400">
              ¿Tienes un proyecto en mente? Hablemos de cómo puedo ayudarte.
            </p>
            <Link
              href="/contacto"
              className="flex h-12 w-fit items-center justify-center rounded-full bg-primary px-6 text-base font-medium text-white transition-colors hover:bg-primary-strong"
            >
              Hablemos de tu proyecto
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
