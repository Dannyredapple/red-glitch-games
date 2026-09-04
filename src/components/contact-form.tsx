import { useState } from "react";
import { toast } from "sonner";
import { PixelButton } from "@/components/pixel-ui";

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const onChange = (key: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.name.trim() || !values.message.trim()) {
      toast.error("Falta información", { description: "Escribe tu nombre y un mensaje." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      toast.error("Email inválido", { description: "Revisa la dirección de correo." });
      return;
    }
    toast.success("Transmisión enviada", {
      description: "Te responderemos desde el búnker en 1-2 días.",
    });
    setValues({ name: "", email: "", message: "" });
  };

  const fieldClass =
    "w-full border border-input bg-background/80 px-3 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-[0_0_18px_-6px_var(--color-primary)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-pixel text-[9px] uppercase tracking-widest text-primary">
            Nombre
          </span>
          <input
            className={fieldClass}
            value={values.name}
            onChange={onChange("name")}
            placeholder="Tu nombre o alias"
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-pixel text-[9px] uppercase tracking-widest text-primary">
            Email
          </span>
          <input
            className={fieldClass}
            type="email"
            value={values.email}
            onChange={onChange("email")}
            placeholder="tu@correo.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block font-pixel text-[9px] uppercase tracking-widest text-primary">
          Mensaje
        </span>
        <textarea
          className={`${fieldClass} min-h-36 resize-y`}
          value={values.message}
          onChange={onChange("message")}
          placeholder="Cuéntanos en qué andas..."
        />
      </label>
      <PixelButton type="submit">Enviar transmisión</PixelButton>
    </form>
  );
}
