"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "No. Si es necesario te guiaré para crear las cuentas del dominio y del hosting. Yo me encargo de toda la configuración técnica.",
  },
  {
    question: "¿Cuánto tarda el desarrollo?",
    answer:
      "Depende del proyecto. Una landing page sencilla suele completarse en pocos días. El plazo exacto se indicará en el presupuesto.",
  },
  {
    question: "¿Qué incluye el precio?",
    answer: (
      <ul className="flex flex-col gap-1.5">
        <li>• Desarrollo completo de la web.</li>
        <li>• Diseño responsive.</li>
        <li>• Formulario de contacto.</li>
        <li>• Publicación en el dominio del cliente.</li>
        <li>• Revisiones acordadas en el presupuesto.</li>
      </ul>
    ),
  },
  {
    question: "¿Qué no incluye?",
    answer: (
      <ul className="flex flex-col gap-1.5">
        <li>• Compra del dominio.</li>
        <li>• Coste del hosting.</li>
        <li>• Mantenimiento mensual.</li>
        <li>• Nuevas funcionalidades tras la entrega.</li>
      </ul>
    ),
  },
  {
    question: "¿Quién es el propietario de la web?",
    answer:
      "Siempre el cliente. El dominio, el hosting y el código fuente pertenecen al cliente una vez finalizado el proyecto.",
  },
  {
    question: "¿Cómo se realiza el pago?",
    answer:
      "El proyecto comienza tras la aceptación del presupuesto y el pago del anticipo. El importe restante se abona antes del despliegue definitivo en el dominio del cliente.",
  },
  {
    question: "¿Puedo solicitar cambios después de la entrega?",
    answer:
      "Sí. Las modificaciones posteriores se presupuestan como un nuevo proyecto.",
  },
];

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-black/[.08] dark:border-white/[.145]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-black transition-colors hover:text-primary-strong dark:text-zinc-50 dark:hover:text-primary"
      >
        {item.question}
        <ChevronDown
          size={18}
          aria-hidden
          className={`flex-none text-zinc-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pb-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {faqs.map((item, index) => (
        <FaqRow
          key={item.question}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
