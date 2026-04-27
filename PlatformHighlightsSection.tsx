const topRowHighlights = [
  {
    title: "Discovery Agent",
    description: "Helps you structure ideas and identify similar technologies",
    className: "absolute top-0 left-0 w-[301px] h-24",
  },
  {
    title: "Drafting Agent",
    description: "Generates a structured provisional patent draft",
    className: "absolute top-0 left-[290px] w-[242px] h-24",
  },
  {
    title: "Specialized Agent",
    description: "Reviews the language specific to the field of the invention",
    className: "absolute top-0 left-[521px] w-[265px] h-[95px]",
    lineBreakAfterTitle: true,
  },
];

const bottomRowHighlights = [
  {
    title: "Drawing Agent",
    description: "Generates diagrams and reference drawings",
    className: "w-[237px] h-24",
  },
  {
    title: "QA Agent",
    description: "Checks formatting and prepares the document for download",
    className: "w-[306px] h-24",
  },
];

const HighlightText = ({
  title,
  description,
  className,
  lineBreakAfterTitle = false,
}: {
  title: string;
  description: string;
  className: string;
  lineBreakAfterTitle?: boolean;
}): JSX.Element => {
  return (
    <p
      className={`${className} [font-family:'Roboto-Black',Helvetica] font-normal text-transparent text-xl text-center tracking-[-0.38px] leading-[30px]`}
    >
      <span className="font-black text-[#6b2a2f] tracking-[-0.08px]">
        {title}
        {lineBreakAfterTitle ? <br /> : null}
      </span>
      {!lineBreakAfterTitle ? (
        <span className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#6b2a2f] tracking-[-0.08px]">
          {" "}
        </span>
      ) : null}
      <span className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#505050] tracking-[-0.08px]">
        {description}
      </span>
    </p>
  );
};

export const PlatformHighlightsSection = (): JSX.Element => {
  return (
    <section
      aria-label="Platform highlights"
      className="w-[786px] h-[214px] flex flex-col gap-[22px]"
    >
      <div className="w-[792px] h-24 relative">
        {topRowHighlights.map((highlight) => (
          <HighlightText
            key={highlight.title}
            title={highlight.title}
            description={highlight.description}
            className={highlight.className}
            lineBreakAfterTitle={highlight.lineBreakAfterTitle}
          />
        ))}
      </div>
      <div className="ml-[134px] w-[557px] flex gap-2.5">
        {bottomRowHighlights.map((highlight) => (
          <HighlightText
            key={highlight.title}
            title={highlight.title}
            description={highlight.description}
            className={highlight.className}
          />
        ))}
      </div>
    </section>
  );
};
