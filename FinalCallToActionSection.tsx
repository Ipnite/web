import cerebro2 from "./cerebro-2.png";
import cerebro3 from "./cerebro-3.png";

export const FinalCallToActionSection = (): JSX.Element => {
  return (
    <section
      className="absolute top-[5759px] left-0 w-[1434px] h-[349px]"
      aria-labelledby="final-call-to-action-heading"
    >
      <img
        className="absolute top-0 left-0 w-[350px] h-[349px] aspect-[1.13] object-cover"
        alt=""
        src={cerebro3}
        aria-hidden="true"
      />
      <img
        className="absolute top-[26px] left-[1052px] w-[382px] h-[323px] aspect-[1.13] object-cover"
        alt=""
        src={cerebro2}
        aria-hidden="true"
      />
      <div className="absolute top-4 left-[calc(50.00%_-_656px)] w-[1313px] h-[312px] bg-[#d9d9d933] rounded-[50px] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]" />
      <h2
        id="final-call-to-action-heading"
        className="absolute top-[52px] left-[calc(50.00%_-_405px)] w-[810px] [font-family:'Roboto_Slab-Medium',Helvetica] font-normal text-bordo-1 text-5xl text-center tracking-[-0.91px] leading-[55.2px] whitespace-nowrap"
      >
        <span className="font-medium tracking-[-0.44px]">
          Your Idea Is Valuable.{" "}
        </span>
        <span className="[font-family:'Roboto_Slab-ExtraBold',Helvetica] font-extrabold tracking-[-0.44px]">
          Protect It
        </span>
      </h2>
      <p className="absolute top-[135px] left-[calc(50.00%_-_252px)] w-[504px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#505050] text-2xl text-center tracking-[-0.46px] leading-9">
        Secure your priority date today, with a serius, guided workflow built
        for inventors.
      </p>
      <div className="absolute top-[241px] left-[551px] w-[333px] h-[45px] bg-[#ededed] rounded-[40px] border border-solid border-bordo-2">
        <a
          className="absolute w-[87.09%] h-[66.67%] top-[17.78%] left-[5.71%] flex items-center justify-center [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-extrabold text-[#4c0815] text-2xl text-center tracking-[-0.46px] leading-9 underline whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4c0815] focus-visible:ring-offset-2 focus-visible:ring-offset-[#ededed] rounded-[40px]"
          href="https://app.ipnite.com"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Start drafting your patent"
        >
          Start Drafting Your Patent
        </a>
      </div>
    </section>
  );
};
