import logo31 from "./logo-3-1.png";
import vector5 from "./vector-5.svg";
import vector7 from "./vector-7.svg";
import vector8 from "./vector-8.svg";

const footerLinks = [
  { label: "Why We Do It", href: "#why-we-do-it" },
  { label: "IP Team", href: "#ip-team" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Plans", href: "#plans" },
  { label: "Contact", href: "#contact" },
];

export const ApplicationFooterSection = (): JSX.Element => {
  return (
    <footer
      className="absolute top-[6109px] left-[calc(50.00%_-_720px)] h-[325px] w-[1440px] overflow-hidden bg-transparent"
      aria-label="Footer"
    >
      <div
        className="absolute top-0 -left-9 h-[363px] w-[1520px] bg-[#6b2a2f]"
        aria-hidden="true"
      />
      <img
        className="absolute left-[88.61%] top-[76.31%] h-[23.69%] w-[11.39%]"
        alt=""
        src={vector5}
        aria-hidden="true"
      />
      <div
        className="absolute left-[92.29%] top-[76.31%] h-[9.23%] w-[2.08%] bg-[url(/vector-6.svg)] bg-[100%_100%]"
        aria-hidden="true"
      >
        <img
          className="absolute left-[24.82%] top-[25.10%] h-[74.90%] w-[75.18%]"
          alt=""
          src={vector7}
          aria-hidden="true"
        />
        <img
          className="absolute left-[39.51%] top-[39.52%] h-[60.48%] w-[60.49%]"
          alt=""
          src={vector8}
          aria-hidden="true"
        />
      </div>
      <div className="absolute left-[69px] top-[39px]">
        <img
          className="aspect-[3.18] h-[68px] w-[217px] object-cover"
          alt="IPnite logo"
          src={logo31}
        />
      </div>
      <div className="absolute left-[81px] top-[123px] w-[433px]">
        <p className="[font-family:'Roboto-Medium',Helvetica] text-[15px] font-medium leading-[22.5px] tracking-[-0.28px] text-white">
          Legal Notice: This tool is an AI writing assistant and does not
          constitute legal advice or a formal attorney-client relationship.
          Please review all drafts with a registered patent practitioner.
        </p>
        <p className="[font-family:'Roboto-Medium',Helvetica] mt-[22.5px] text-[15px] font-medium leading-[22.5px] tracking-[-0.28px] text-white">
          © IPnite — All rights reserved
        </p>
        <p className="[font-family:'Roboto-Medium',Helvetica] mt-[22.5px] text-[15px] font-medium leading-[22.5px] tracking-[-0.28px] text-white">
          Powered by Ik-Holcán
        </p>
      </div>
      <nav
        className="absolute left-[1059px] top-[123px]"
        aria-label="Footer navigation"
      >
        <ul className="m-0 list-none p-0">
          {footerLinks.map((link, index) => (
            <li
              key={link.label}
              className={`flex h-[25px] ${index === 0 ? "mt-0" : "mt-[4px]"} ${
                link.label === "Why We Do It"
                  ? "w-[87px]"
                  : link.label === "How It Works"
                    ? "w-[90px]"
                    : "w-[84px]"
              }`}
            >
              <a
                href={link.href}
                className="[font-family:'Roboto-Medium',Helvetica] w-full whitespace-nowrap text-[15px] font-medium leading-[28.5px] tracking-[-0.28px] text-white focus:outline-none focus-visible:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
