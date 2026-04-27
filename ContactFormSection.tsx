import { FormEvent, useId, useState } from "react";
import group119 from "./group-119.png";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const ContactFormSection = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const fields = [
    {
      key: "name" as const,
      id: nameId,
      label: "Name",
      type: "text",
      placeholder: "Enter your name...",
      wrapperClassName: "absolute top-0 left-0 w-[409px] h-[81px]",
      labelClassName:
        "absolute top-0 left-0 w-[68px] [font-family:'Roboto-Medium',Helvetica] font-medium text-bordo-1 text-[21px] tracking-[0] leading-[normal]",
      inputClassName:
        "absolute top-[33px] left-0 w-[409px] h-12 rounded-[8759.12px] bg-white pl-[52px] pr-5 [font-family:'Roboto-Regular',Helvetica] font-normal text-[#4c0815] text-[21px] tracking-[0] leading-[normal] shadow-[0px_4px_4px_#6b2a2f0d] outline-none placeholder:text-[#adadad]",
    },
    {
      key: "email" as const,
      id: emailId,
      label: "Email",
      type: "email",
      placeholder: "Enter your email adress...",
      wrapperClassName: "absolute top-[109px] left-0 w-[409px] h-[81px]",
      labelClassName:
        "absolute top-0 left-0 w-[68px] [font-family:'Roboto-Medium',Helvetica] font-medium text-bordo-1 text-[21px] tracking-[0] leading-[normal]",
      inputClassName:
        "absolute top-[32px] left-0 w-[409px] h-12 rounded-[8759.12px] bg-white pl-[52px] pr-5 [font-family:'Roboto-Regular',Helvetica] font-normal text-[#4c0815] text-[21px] tracking-[0] leading-[normal] shadow-[0px_4px_4px_#6b2a2f0d] outline-none placeholder:text-[#adadad]",
    },
    {
      key: "subject" as const,
      id: subjectId,
      label: "Subject",
      type: "text",
      placeholder: "Enter your subject...",
      wrapperClassName: "absolute top-[216px] left-0 w-[409px] h-[81px]",
      labelClassName:
        "absolute top-0 left-0 w-[143px] [font-family:'Roboto-Medium',Helvetica] font-medium text-bordo-1 text-[21px] tracking-[0] leading-[normal]",
      inputClassName:
        "absolute top-[33px] left-0 w-[409px] h-12 rounded-[8759.12px] bg-white pl-[52px] pr-5 [font-family:'Roboto-Regular',Helvetica] font-normal text-[#4c0815] text-[21px] tracking-[0] leading-[normal] shadow-[0px_4px_4px_#0000000d] outline-none placeholder:text-[#adadad]",
    },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      className="absolute top-[5080px] left-0 w-[1440px] h-[680px]"
      aria-labelledby="contact-section-title"
    >
      <h2
        id="contact-section-title"
        className="absolute top-5 left-[187px] w-[210px] [font-family:'Roboto_Slab-Bold',Helvetica] font-bold text-[#6b2a2f] text-5xl tracking-[0] leading-[72px] whitespace-nowrap"
      >
        Contact
      </h2>
      <form
        className="absolute top-[123px] left-[190px] w-[425px] h-[532px]"
        onSubmit={handleSubmit}
      >
        <div className="absolute top-0 left-0 w-[409px] h-[465px]">
          {fields.map((field) => (
            <div key={field.key} className={field.wrapperClassName}>
              <label htmlFor={field.id} className={field.labelClassName}>
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.key}
                type={field.type}
                value={formData[field.key]}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    [field.key]: event.target.value,
                  }))
                }
                placeholder={field.placeholder}
                className={field.inputClassName}
                autoComplete={field.key === "name" ? "name" : field.key}
                aria-label={field.label}
              />
            </div>
          ))}

          <div className="absolute top-80 left-0 w-[409px] h-[145px]">
            <label
              htmlFor={messageId}
              className="absolute top-0 left-0 w-[143px] [font-family:'Roboto-Medium',Helvetica] font-medium text-bordo-1 text-[21px] tracking-[0] leading-[normal]"
            >
              Message
            </label>
            <textarea
              id={messageId}
              name="message"
              value={formData.message}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  message: event.target.value,
                }))
              }
              placeholder="Enter your message..."
              className="absolute top-[35px] left-0 w-[409px] h-[110px] resize-none rounded-[14.02px] bg-white pl-[52px] pr-5 pt-[11px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#4c0815] text-[21px] tracking-[0] leading-[normal] shadow-[0px_4px_4px_#6b2a2f0d] outline-none placeholder:text-[#adadad]"
              aria-label="Message"
            />
          </div>
        </div>
        <button
          type="submit"
          className="absolute top-[497px] left-[300px] w-[109px] h-[35px] rounded-[50px] border border-solid border-bordo-2 bg-[#ededed]"
          aria-label="Send contact form"
        >
          <span className="absolute w-[58.72%] h-[81.82%] top-[8.57%] left-[21.10%] flex items-center justify-center [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-extrabold text-[#4c0815] text-2xl text-center tracking-[-0.46px] leading-9 whitespace-nowrap">
            Send
          </span>
        </button>
      </form>
      <img
        className="absolute top-0 left-[810px] w-[497px] h-[588px]"
        alt="Person holding a folder beside decorative contact icons"
        src={group119}
      />
    </section>
  );
};
