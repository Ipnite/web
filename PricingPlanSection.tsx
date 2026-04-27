import group106 from "./group-106.png";
import vector2 from "./vector-2.svg";

export const PricingPlanSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="pricing-plan-section-title"
      className="absolute top-[4106px] left-[calc(50.00%_-_341px)] w-[684px] h-[201px]"
    >
      <div className="absolute w-[682px] h-[122px] top-0 left-0">
        <div className="absolute top-[22px] left-[calc(50.00%_-_314px)] w-[630px] h-[78px]">
          <div
            aria-hidden="true"
            className="absolute top-0 left-[calc(50.00%_-_315px)] w-[628px] h-[78px] bg-blanco rounded-[78.02px]"
          />
          <h2
            id="pricing-plan-section-title"
            className="absolute top-1 left-[42px] w-[541px] [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-extrabold text-bordo-1 text-[46.8px] text-center tracking-[1.87px] leading-[70.2px] whitespace-nowrap"
          >
            Confidential by design
          </h2>
        </div>
        <div
          aria-hidden="true"
          className="absolute top-0 left-[632px] w-[50px] h-[50px] flex items-center justify-center rounded-[25px] bg-[linear-gradient(180deg,rgba(134,81,85,1)_0%,rgba(108,43,48,1)_100%)]"
        >
          <img className="w-[28.57px] h-auto" alt="" src={vector2} />
        </div>
        <img
          className="absolute top-[72px] left-0 w-[50px] h-[50px]"
          alt=""
          aria-hidden="true"
          src={group106}
        />
      </div>
      <p className="absolute top-[120px] left-[calc(50.00%_-_277px)] w-[543px] [font-family:'Roboto_Slab-Medium',Helvetica] font-normal text-[#505050] text-[25.8px] text-center tracking-[-0.49px] leading-[38.8px]">
        <span className="font-medium tracking-[-0.13px]">
          We don&apos;t use your data for training, <br />
        </span>
        <span className="[font-family:'Roboto_Slab-Bold',Helvetica] font-bold text-[28.2px] tracking-[-0.15px] leading-[42.3px]">
          nor do we keep your ideas
        </span>
      </p>
    </section>
  );
};
