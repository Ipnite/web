import vector4 from "./vector-4.svg";

const credentialItems = [
  {
    id: "workflow",
    label: "Structured patent workflow",
    containerClassName:
      "absolute top-0 left-[calc(50.00%_-_414px)] w-96 h-[50px]",
    backgroundClassName:
      "absolute top-0 left-[calc(50.00%_-_192px)] w-[382px] h-[50px] bg-white rounded-[40px]",
    textClassName:
      "absolute top-[7px] left-[19px] w-[343px] [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-extrabold text-bordo-1 text-2xl text-center tracking-[0.96px] leading-9 whitespace-nowrap",
  },
  {
    id: "drafts",
    label: "Exportable patent drafts",
    containerClassName:
      "absolute top-0 left-[calc(50.00%_+_68px)] w-[347px] h-[50px]",
    backgroundClassName:
      "absolute top-0 left-[calc(50.00%_-_174px)] w-[345px] h-[50px] bg-blanco rounded-[40px]",
    textClassName:
      "absolute top-[7px] left-[22px] w-[302px] [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-extrabold text-bordo-1 text-2xl text-center tracking-[0.96px] leading-9 whitespace-nowrap",
  },
];

export const TrustCredentialsSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="trust-credentials-heading"
      className="absolute top-[3880px] left-[calc(50.00%_-_720px)] flex h-[596px] w-[1440px] flex-col"
    >
      <div className="ml-[625px] mt-px flex min-w-[191px] items-start">
        <div className="flex w-[191px] justify-center">
          <div className="relative ml-0.5 h-[35px] w-[193px]">
            <div className="absolute left-[calc(50.00%_-_96px)] top-0 h-[35px] w-[191px] rounded-[33px] bg-bordo-2" />
            <div className="absolute top-[calc(50.00%_-_12px)] left-5 flex h-[23px] w-[151px] items-center justify-center whitespace-nowrap text-center [font-family:'Roboto_Slab-ExtraBold',Helvetica] text-[17.9px] font-extrabold leading-[26.8px] tracking-[-0.34px] text-gris-2">
              HOW IT WORKS
            </div>
          </div>
        </div>
      </div>
      <h2
        id="trust-credentials-heading"
        className="mt-[5px] h-[154px] w-[918px] self-center text-center [font-family:'Roboto_Slab-Regular',Helvetica] text-[64px] font-normal leading-[75px] tracking-[0] text-[#505050]"
      >
        <span className="[font-family:'Roboto_Slab-Regular',Helvetica] text-[64px] font-normal leading-[75px] tracking-[0] text-[#505050]">
          Professional Standar <br />
        </span>
        <span className="[font-family:'Roboto_Slab-Bold',Helvetica] font-bold">
          Built for Early Inventors
        </span>
      </h2>
      <div
        className="relative mt-[276px] ml-[307px] h-[50px] w-[827px]"
        role="group"
        aria-label="Core drafting benefits"
      >
        {credentialItems.map((item) => (
          <div key={item.id} className={item.containerClassName}>
            <div className={item.backgroundClassName} />
            <div className={item.textClassName}>{item.label}</div>
          </div>
        ))}

        <div
          className="absolute top-0 left-[407px] h-[50px] w-[50px] rounded-[25px] bg-[linear-gradient(180deg,rgba(134,81,85,1)_0%,rgba(108,43,48,1)_100%)]"
          aria-hidden="true"
        >
          <div className="relative top-[20.00%] left-[20.00%] flex h-[60.00%] w-[60.04%] bg-[url(/vector-3.svg)] bg-[100%_100%]">
            <img className="w-[15.94px] flex-1" alt="" src={vector4} />
          </div>
        </div>
      </div>
      <p className="mt-12 h-[25px] w-[860px] self-center text-center [font-family:'Roboto-Regular',Helvetica] text-xl font-normal leading-[30px] tracking-[-0.38px] text-[#505050] whitespace-nowrap">
        <span className="[font-family:'Roboto-Italic',Helvetica] italic tracking-[-0.08px]">
          IPnite does not replace legal advice.{" "}
        </span>
        <span className="[font-family:'Roboto-MediumItalic',Helvetica] font-medium italic tracking-[-0.08px]">
          It accelerates and structures the drafting process.
          <br />
        </span>
        <span className="[font-family:'Roboto-Italic',Helvetica] italic tracking-[-0.08px]">
          {""}
        </span>
      </p>
    </section>
  );
};
