import bodyPart from "./body-part.png";
import borderFixes from "./border-fixes.png";
import captura1 from "./captura-1.png";
import captura2 from "./captura-2.png";
import captura3 from "./captura-3.png";
import cerebro from "./cerebro.png";
import image from "./image.svg";
import protectionShouldnTBeAPrivilege from "./protection-shouldn-t-be-a-privilege.svg";
import replaceTool from "./replace-tool.svg";
import screenBackgroundSupport from "./screen-background-support.svg";
import screenBorder from "./screen-border.svg";
import screenBottomBar from "./screen-bottom-bar.svg";
import vector from "./vector.svg";

export const HeroStatementSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="hero-statement-heading"
      className="absolute top-0 left-0 w-[1440px] h-[1480px] bg-white overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-[68px] left-[512px] w-[938px] h-[834px] opacity-20"
      >
        <div className="absolute top-0 left-0 w-[938px] h-[834px] bg-[#4c0815] rounded-[469px/416.97px] blur-[250px] opacity-50" />
        <div className="absolute top-[150px] left-[131px] w-[462px] h-[516px] rounded-[230.85px/257.78px] blur-[400px] bg-[linear-gradient(197deg,rgba(107,42,47,1)_0%,rgba(209,82,92,1)_100%)] opacity-50" />
      </div>
      <img
        className="absolute top-[60px] left-[841px] w-[599px] h-[780px] aspect-[1.13] object-cover"
        alt=""
        aria-hidden="true"
        src={cerebro}
      />
      <div
        aria-hidden="true"
        className="absolute top-[95px] left-[calc(50.00%_-_683px)] w-[1366px] h-[785px] bg-[#d9d9d933] rounded-[50px] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]"
      />
      <img
        id="hero-statement-heading"
        className="absolute top-[140px] left-[calc(50.00%_-_319px)] w-[623px] h-[135px]"
        alt="Protection Shouldn't Be a Privilege"
        src={protectionShouldnTBeAPrivilege}
      />
      <img
        className="absolute w-[90.56%] h-[55.61%] top-[44.39%] left-[9.44%]"
        alt=""
        aria-hidden="true"
        src={captura3}
      />
      <img
        className="absolute w-[29.93%] h-[62.77%] top-[37.23%] left-[70.07%]"
        alt=""
        aria-hidden="true"
        src={captura2}
      />
      <p className="absolute top-[301px] left-[410px] w-[624px] [font-family:'Roboto-Medium',Helvetica] font-normal text-colecci-n-de-variables-gris-3 text-xl text-center tracking-[-0.38px] leading-[30px]">
        <span className="font-medium tracking-[-0.08px]">
          Most people think protecting an idea requires a massive legal team and
          a mountain of gold.{" "}
        </span>
        <span className="[font-family:'Roboto-Bold',Helvetica] font-bold tracking-[-0.08px]">
          At IPnite we believe that&apos;s wrong.
        </span>
      </p>
      <div
        aria-hidden="true"
        className="absolute top-[calc(50.00%_-_265px)] left-[calc(50.00%_-_375px)] w-[744px] h-[451px] shadow-[0px_2.75px_2.75px_#6b2a2f4c]"
      >
        <img
          className="absolute w-[100.00%] h-[4.78%] top-[95.22%] left-0"
          alt=""
          src={bodyPart}
        />
        <div className="w-[83.68%] h-[95.22%] left-[8.20%] bg-[url(/screen-border-color.svg)] bg-[100%_100%] absolute top-0">
          <img
            className="absolute w-[100.00%] h-[4.71%] top-[95.29%] left-0"
            alt=""
            src={borderFixes}
          />
          <img
            className="absolute w-[99.37%] h-[99.09%] top-0 left-0"
            alt=""
            src={screenBackgroundSupport}
          />
          <img
            className="absolute w-[99.37%] h-[4.26%] top-[95.74%] left-0"
            alt=""
            src={screenBottomBar}
          />
          <img
            className="w-[99.73%] h-[99.61%] left-0 absolute top-0"
            alt=""
            src={screenBorder}
          />
          <div className="absolute w-[95.39%] h-[89.96%] top-[2.97%] left-[2.31%]">
            <div className="w-full h-full flex bg-white rounded-[7.08px_7.08px_0px_0px] overflow-hidden">
              <img
                className="flex-1 w-[593.78px]"
                alt="IPnite app interface preview"
                src={replaceTool}
              />
            </div>
          </div>
          <div className="absolute w-[86px] h-[13px] top-[13px] left-[269px]">
            <div className="h-full bg-[url(/notch-background.svg)] bg-[100%_100%]">
              <div className="relative w-[6.99%] h-[45.98%] top-[27.01%] left-[46.40%] bg-[#cfcfcf] rounded-[3px]" />
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute w-[94.38%] h-[81.62%] top-[18.38%] left-[5.62%]"
        alt=""
        aria-hidden="true"
        src={captura1}
      />
      <div
        aria-hidden="true"
        className="absolute top-[652px] left-[1284px] w-[70px] h-[70px] flex rounded-[35px] bg-[linear-gradient(180deg,rgba(134,81,85,1)_0%,rgba(108,43,48,1)_100%)]"
      >
        <img className="flex-1 w-10" alt="" src={vector} />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-[461px] left-[275px] w-[70px] h-[70px] flex rounded-[35px] bg-[linear-gradient(180deg,rgba(134,81,85,1)_0%,rgba(108,43,48,1)_100%)]"
      >
        <img className="flex-1 w-[37.38px]" alt="" src={image} />
      </div>
      <div className="absolute top-[393px] left-[calc(50.00%_-_113px)] w-[227px] h-[45px]">
        <a
          className="relative flex w-full h-full items-center justify-center"
          href="https://app.ipnite.com"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Get Started Now"
        >
          <div className="w-[99.13%] h-full left-0 bg-[#ededed] rounded-[45px] border border-solid border-bordo-1 absolute top-0" />
          <span className="absolute w-[78.60%] h-[66.13%] top-[17.78%] left-[10.48%] flex items-center justify-center [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-extrabold text-[#4c0815] text-2xl text-center tracking-[-0.46px] leading-9 underline whitespace-nowrap">
            Get Started Now
          </span>
        </a>
      </div>
    </section>
  );
};
