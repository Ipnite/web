import { type FormEvent, useId, useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormData = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [sent, setSent] = useState(false);

  const nameId    = useId();
  const emailId   = useId();
  const subjectId = useId();
  const messageId = useId();

  const fields = [
    { key: "name"    as const, id: nameId,    label: "Name",    type: "text",  placeholder: "Enter your name..."    },
    { key: "email"   as const, id: emailId,   label: "Email",   type: "email", placeholder: "Enter your email address..." },
    { key: "subject" as const, id: subjectId, label: "Subject", type: "text",  placeholder: "Enter your subject..."  },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: conectar con backend / servicio de email
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <p className="font-slab font-bold text-bordo2 text-2xl text-center">
          ¡Mensaje enviado! Te contactaremos pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {fields.map((f) => (
        <div key={f.key} className="flex flex-col gap-1">
          <label
            htmlFor={f.id}
            className="font-roboto font-medium text-bordo2 text-[21px]"
          >
            {f.label}
          </label>
          <input
            id={f.id}
            name={f.key}
            type={f.type}
            value={form[f.key]}
            placeholder={f.placeholder}
            autoComplete={f.key === "name" ? "name" : f.key}
            onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
            className="h-12 rounded-full bg-white pl-6 pr-5 font-roboto text-[#4c0815] text-[21px] shadow-sm outline-none placeholder:text-gris1 border border-bordo2/20 focus:border-bordo2 transition-colors"
            style={{ fontFamily: "Roboto, sans-serif" }}
          />
        </div>
      ))}

      <div className="flex flex-col gap-1">
        <label
          htmlFor={messageId}
          className="font-roboto font-medium text-bordo2 text-[21px]"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          value={form.message}
          placeholder="Enter your message..."
          rows={4}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          className="resize-none rounded-2xl bg-white pl-6 pr-5 pt-3 font-roboto text-[#4c0815] text-[21px] shadow-sm outline-none placeholder:text-gris1 border border-bordo2/20 focus:border-bordo2 transition-colors"
          style={{ fontFamily: "Roboto, sans-serif" }}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="btn-bordo h-[35px] px-8 text-2xl"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          Send
        </button>
      </div>
    </form>
  );
}
