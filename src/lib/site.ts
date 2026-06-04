export const site = {
  name: "Foundation for Independence",
  shortName: "FFI",
  tagline:
    "Person-centered Supported Living and Employment Services for transition-age adults with developmental disabilities in Arizona.",
  description:
    "Foundation for Independence (FFI) provides person-centered Supported Living and Employment Services that help transition-age young adults and adults with intellectual and developmental disabilities build practical life skills, gain meaningful employment, and live with greater independence across Arizona.",
  url: "https://www.ffiaz.info",
  contact: {
    email: "foundationforindependence@gmail.com",
    phone: "(602) 663-1664",
    phoneHref: "+16026631664",
    address: "8729 E. Hazel Street, Mesa, AZ 85208",
    addressLines: ["8729 E. Hazel Street", "Mesa, AZ 85208"],
  },
  serviceAreas: [
    {
      county: "Pinal County",
      cities: ["Casa Grande", "Florence", "Apache Junction", "Coolidge"],
    },
    {
      county: "Maricopa County",
      cities: ["Mesa", "Phoenix", "Chandler", "Gilbert"],
    },
    {
      county: "Navajo County",
      cities: ["Snowflake", "Taylor", "Show Low"],
    },
    {
      county: "Apache County",
      cities: ["St. Johns", "Concho", "Eagar"],
    },
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Supported Living (HASL)",
        href: "/services/supported-living",
        description:
          "Daily living skills, hygiene, budgeting, and community access — at home and in the community.",
      },
      {
        label: "Employment Services",
        href: "/services/employment",
        description:
          "STEP, Individual Supported Employment (ISE), and Group Supported Employment (GSE).",
      },
    ],
  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Courses", href: "/courses" },
  { label: "Tools", href: "/tools" },
  { label: "Resources", href: "/resources" },
  { label: "Stories", href: "/stories" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  Services: [
    { label: "Supported Living (HASL)", href: "/services/supported-living" },
    { label: "Employment Services", href: "/services/employment" },
    { label: "Service Areas", href: "/service-areas" },
  ],
  Organization: [
    { label: "About FFI", href: "/about" },
    { label: "Our Approach", href: "/about#approach" },
    { label: "Founder", href: "/about#founder" },
    { label: "Join our team", href: "/careers" },
  ],
  Connect: [
    { label: "Contact", href: "/contact" },
    { label: "Stories", href: "/stories" },
    { label: "FAQ", href: "/faq" },
    { label: "Free courses", href: "/courses" },
    { label: "Resources", href: "/resources" },
    { label: "Free tools", href: "/tools" },
  ],
} as const;
