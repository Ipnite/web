export interface TrustedOrganization {
  name: string;
  logo: string;
  website: string;
  relationshipType: "trusted-by";
  approvedForPublicDisplay: boolean;
  ariaLabel: string;
}

export const trustedOrganizations: TrustedOrganization[] = [
  { name: "RNA Solutions", logo: "/images/trustedby/rnasolutions-mask.png", website: "https://rnasolutions.bio/", relationshipType: "trusted-by", approvedForPublicDisplay: true, ariaLabel: "RNA Solutions website" },
  { name: "Natural Negative", logo: "/images/trustedby/naturalnegative.svg", website: "https://naturalnegative.com/", relationshipType: "trusted-by", approvedForPublicDisplay: true, ariaLabel: "Natural Negative website" },
  { name: "Cannformatics", logo: "/images/trustedby/cannformatics-mask.png", website: "https://cannformatics.com/", relationshipType: "trusted-by", approvedForPublicDisplay: true, ariaLabel: "Cannformatics website" },
];
