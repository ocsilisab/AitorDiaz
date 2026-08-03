import {
  MessageCircle,
  Video,
  FileText,
  Code2,
  Eye,
  Rocket,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: MessageCircle,
    title: "Contacto",
    description:
      "Cuéntame tu proyecto mediante el formulario de contacto o por correo electrónico.",
  },
  {
    icon: Video,
    title: "Reunión inicial",
    description:
      "Realizamos una videollamada para entender tus necesidades, resolver dudas y definir los objetivos del proyecto.",
  },
  {
    icon: FileText,
    title: "Presupuesto",
    description:
      "Te envío un presupuesto detallado con el alcance, precio, plazo de entrega y revisiones incluidas.",
  },
  {
    icon: Code2,
    title: "Desarrollo",
    description:
      "Comienzo el desarrollo de la web y podrás seguir el progreso mediante una versión temporal.",
  },
  {
    icon: Eye,
    title: "Revisión",
    description:
      "Revisamos el resultado y realizo las modificaciones incluidas en el presupuesto.",
  },
  {
    icon: Rocket,
    title: "Despliegue",
    description:
      "Una vez aprobado el proyecto y recibido el pago final, publico la web en tu dominio.",
  },
  {
    icon: PackageCheck,
    title: "Entrega",
    description:
      "El proyecto queda completamente a tu nombre. El dominio, hosting y código son tuyos.",
  },
];

function StepIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary/15 text-primary-strong transition-transform duration-300 group-hover:scale-110 dark:text-primary">
      <Icon size={20} aria-hidden />
    </span>
  );
}

function StepCard({ step }: { step: Step }) {
  return (
    <div className="group flex flex-col gap-3 rounded-xl border border-black/[.08] bg-black/[.015] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md dark:border-white/[.145] dark:bg-white/[.03] md:h-full md:text-center">
      <div className="md:flex md:flex-col md:items-center">
        <StepIcon icon={step.icon} />
      </div>
      <h3 className="text-base font-semibold text-black dark:text-zinc-50">
        {step.title}
      </h3>
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {step.description}
      </p>
    </div>
  );
}

export default function ProcessTimeline() {
  return (
    <>
      {/* Móvil: timeline vertical */}
      <ol className="flex flex-col gap-4 md:hidden">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < steps.length - 1 && (
                <span
                  aria-hidden
                  className="mt-1 w-px flex-1 bg-primary/20"
                />
              )}
            </div>
            <div className="flex-1 pb-2">
              <StepCard step={step} />
            </div>
          </li>
        ))}
      </ol>

      {/* Escritorio: timeline horizontal */}
      <div className="hidden overflow-x-auto pb-2 md:block">
        <ol className="flex min-w-max gap-5">
          {steps.map((step, index) => (
            <li key={step.title} className="flex w-52 flex-none flex-col gap-2">
              <div className="flex items-center">
                <span
                  aria-hidden
                  className={
                    index === 0
                      ? "h-px flex-1 opacity-0"
                      : "h-px flex-1 bg-primary/20"
                  }
                />
                <span className="px-2 text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden
                  className={
                    index === steps.length - 1
                      ? "h-px flex-1 opacity-0"
                      : "h-px flex-1 bg-primary/20"
                  }
                />
              </div>
              <StepCard step={step} />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
