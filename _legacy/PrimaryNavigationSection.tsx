import line4 from "./line-4.svg";
import logo21 from "./logo-2-1.png";

const navigationItems = [
  { label: "Why We Do It", widthClass: "w-[105px]" },
  { label: "IP Team", widthClass: "w-[63px]" },
  { label: "How It Works", widthClass: "w-[104px]" },
  { label: "Plans", widthClass: "w-[45px]" },
];

export const PrimaryNavigationSection = (): JSX.Element => {
  return (
    <header className="absolute top-0 left-[calc(50.00%_-_720px)] w-[1440px] h-20 flex justify-center">
      <div className="w-[1440px] h-20 flex items-start bg-[#f9f9fb] blur-[2px]">
        <a
          href="/"
          aria-label="Go to homepage"
          className="mt-[31px] ml-20 inline-flex h-[23px] w-[106px] shrink-0"
        >
          <img
            className="w-[106px] h-[23px] aspect-[4.61] object-contain"
            alt="Logo"
            src={logo21}
          />
        </a>
        <nav
          aria-label="Primary navigation"
          className="mt-[27px] ml-[265px] w-[539px]"
        >
          <ul className="flex gap-[74px]">
            {navigationItems.map((item) => (
              <li
                key={item.label}
                className={`${item.widthClass} h-[25px] flex`}
              >
                <a
                  href="/"
                  className={`flex-1 ${item.widthClass} [font-family:'Roboto_Slab-Bold',Helvetica] font-bold text-[#505050] text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="/contact"
          className="mt-7 ml-[177px] flex h-[23px] w-[84px] items-start rounded-[14.5px] border border-solid border-[#6b2a2f]"
          aria-label="Contact"
        >
          <span className="-mt-px ml-1 h-[25px] w-[75px] [font-family:'Roboto_Slab-Bold',Helvetica] font-bold text-bordo-2 text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap">
            Contact
          </span>
        </a>
        <div
          className="mt-[27px] ml-[34px] flex w-[68px]"
          role="group"
          aria-label="Language selector"
        >
          <button
            type="button"
            aria-pressed="true"
            className="w-[30px] h-[25px] [font-family:'Roboto_Slab-Bold',Helvetica] font-bold text-bordo-1 text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap"
          >
            EN
          </button>
          <img
            className="mt-2 ml-0.5 h-[9px] w-px object-cover"
            alt=""
            src={line4}
            aria-hidden="true"
          />
          <button
            type="button"
            aria-pressed="false"
            className="ml-px w-[30px] h-[25px] [font-family:'Roboto_Slab-Bold',Helvetica] font-bold text-gris-1 text-base text-center tracking-[-0.18px] leading-6 whitespace-nowrap"
          >
            ES
          </button>
        </div>
      </div>
    </header>
  );
};
