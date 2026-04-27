import x1 from "./1.svg";
import x2 from "./2.svg";
import x3 from "./3.svg";
import x4 from "./4.svg";
import imagen from "./imagen.png";

const workflowSteps = [
  {
    id: 1,
    text: (
      <span className="absolute top-[84px] left-[30px] w-[242px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#505050] text-xl text-center tracking-[-0.38px] leading-[23.0px] whitespace-nowrap">
        Describe your invention
      </span>
    ),
    icon: x1,
    iconClassName: "mt-[15.9px] w-[18.06px] h-[30.23px] ml-[22.1px]",
    containerClassName: "absolute top-0 left-0 w-[304px] h-[140px]",
    circleWrapperClassName:
      "absolute top-0 left-[121px] w-[62px] h-[62px] flex bg-[#6b2a2f] rounded-[31px]",
  },
  {
    id: 2,
    text: (
      <p className="absolute top-[72px] left-[30px] w-[242px] [font-family:'Roboto-Medium',Helvetica] font-normal text-[#505050] text-xl text-center tracking-[-0.38px] leading-[23.0px]">
        <span className="font-medium tracking-[-0.08px]">Agents </span>
        <span className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold tracking-[-0.08px]">
          analyze{" "}
        </span>
        <span className="font-medium tracking-[-0.08px]">
          the structure and references
        </span>
      </p>
    ),
    icon: x2,
    iconClassName: "mt-[15.9px] w-[21.7px] h-[30.66px] ml-[20.4px]",
    containerClassName: "absolute top-0 left-[312px] w-[304px] h-[140px]",
    circleWrapperClassName:
      "absolute w-[62px] h-[62px] top-0 left-[121px] flex",
    innerCircle: true,
  },
  {
    id: 3,
    text: (
      <p className="absolute top-[74px] left-[31px] w-[242px] [font-family:'Roboto-Medium',Helvetica] font-normal text-[#505050] text-xl text-center tracking-[-0.38px] leading-[23.0px]">
        <span className="font-medium tracking-[-0.08px]">
          The patent draft is{" "}
        </span>
        <span className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold tracking-[-0.08px]">
          generated
        </span>
      </p>
    ),
    icon: x3,
    iconClassName: "mt-[15.1px] w-[22.03px] h-[31.1px] ml-[20.4px]",
    containerClassName: "absolute top-[154px] left-0 w-[304px] h-[140px]",
    circleWrapperClassName:
      "absolute top-0 left-[121px] w-[62px] h-[62px] flex bg-[#6b2a2f] rounded-[31px]",
  },
  {
    id: 4,
    text: (
      <p className="absolute top-[62px] left-[30px] w-[242px] [font-family:'Roboto-SemiBold',Helvetica] font-normal text-[#505050] text-xl text-center tracking-[-0.38px] leading-[23.0px]">
        <span className="font-semibold tracking-[-0.08px]">
          Review and export the document
        </span>
        <span className="[font-family:'Roboto-Medium',Helvetica] font-medium tracking-[-0.08px]">
          {" "}
          or continue <br />
          with the filing
        </span>
      </p>
    ),
    icon: x4,
    iconClassName: "mt-[15.9px] w-[22.42px] h-[30.23px] ml-[19.5px]",
    containerClassName:
      "absolute top-[154px] left-[calc(50.00%_+_5px)] w-[304px] h-[140px]",
    cardClassName:
      "absolute top-[39px] left-[calc(50.00%_-_152px)] w-[302px] h-[101px] bg-white rounded-[31px] shadow-[0px_4.8px_4.8px_#8c595e0d]",
    circleWrapperClassName:
      "absolute top-0 left-[121px] w-[62px] h-[62px] flex bg-[#6b2a2f] rounded-[31px]",
  },
];

export const ProcessOverviewSection = (): JSX.Element => {
  return (
    <section
      className="absolute top-[3232px] left-0 w-[1440px] h-[648px]"
      aria-labelledby="process-overview-heading"
    >
      <h2
        id="process-overview-heading"
        className="absolute top-[11px] left-[calc(50.00%_-_214px)] w-[429px] [font-family:'Roboto_Slab-Regular',Helvetica] font-normal text-[#6b2a2f] text-[64px] tracking-[0] leading-[96px] whitespace-nowrap"
      >
        <span className="[font-family:'Roboto_Slab-Regular',Helvetica] font-normal text-[#6b2a2f] text-[64px] tracking-[0] leading-[96px]">
          How It{" "}
        </span>
        <span className="[font-family:'Roboto_Slab-Bold',Helvetica] font-bold">
          Works
        </span>
      </h2>
      <p className="absolute top-[105px] left-[calc(50.00%_-_111px)] w-[222px] [font-family:'Roboto-BoldItalic',Helvetica] font-bold italic text-[#505050] text-2xl text-center tracking-[-0.46px] leading-9 whitespace-nowrap">
        Four-step Workflow
      </p>
      <img
        className="absolute top-[93px] left-[120px] w-[522px] h-[480px]"
        alt="Illustration of a person working through the patent drafting workflow"
        src={imagen}
      />
      <div
        className="absolute w-[614px] h-[294px] top-[215px] left-[636px]"
        role="list"
        aria-label="Four-step workflow"
      >
        {workflowSteps.map((step) => (
          <article
            key={step.id}
            className={step.containerClassName}
            role="listitem"
            aria-label={`Step ${step.id}`}
          >
            <div
              className={
                step.cardClassName ||
                "absolute top-[39px] left-0 w-[302px] h-[101px] bg-white rounded-[31px] shadow-[0px_4.8px_4.8px_#8c595e0d]"
              }
            />
            {step.text}
            <div className={step.circleWrapperClassName} aria-hidden="true">
              {step.innerCircle ? (
                <div className="w-[62px] h-[62px] flex bg-[#6b2a2f] rounded-[31px]">
                  <img className={step.iconClassName} alt="" src={step.icon} />
                </div>
              ) : (
                <img className={step.iconClassName} alt="" src={step.icon} />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
