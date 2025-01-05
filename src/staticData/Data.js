                 // ****navbar links*** //
export const NAV_LINKS = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "contact", label: "Contact" },
  ];

 

  export const FeaturesData = [
    {
      title: "Predictive Analytics",
      description:
        "Leverage data to anticipate trends and make proactive decisions for your business.",
      icon: "📈",
    },
    {
      title: "Data Visualization",
      description:
        "Transform complex data into intuitive, actionable visual insights.",
      icon: "📊",
    },
    {
      title: "Real-time Insights",
      description:
        "Access real-time data to stay ahead in a fast-paced business environment.",
      icon: "⏱️",
    },
    {
      title: "Custom Reporting",
      description:
        "Receive tailored reports that align with your unique business goals.",
      icon: "📝",
    },
  ];









                //****Footer Data****//

                
// src/staticData/footerData.js

export const FOOTER_DATA = {
    about: {
      title: "Analytica",
      description:
        "Analytica Data delivers powerful analytics solutions, turning complex data into actionable insights. Empower your business with real-time analytics and smarter decision-making.",
      socialLinks: [
        { href: "#", ariaLabel: "Facebook", iconClass: "fab fa-facebook-f" },
        { href: "#", ariaLabel: "Instagram", iconClass: "fab fa-instagram" },
        { href: "#", ariaLabel: "Twitter", iconClass: "fab fa-twitter" },
        { href: "#", ariaLabel: "GitHub", iconClass: "fab fa-github" },
        { href: "#", ariaLabel: "Dribbble", iconClass: "fab fa-dribbble" },
      ],
    },
    sections: [
      {
        title: "Home",
        links: [
          { href: "#about", label: "About" },
          { href: "#features", label: "Features" },
          { href: "#contact", label: "Contact" },
          { href: "#careers", label: "Careers" },
        ],
      },
      {
        title: "Our Services",
        links: [
          { href: "#web-dev", label: "Web Development" },
          { href: "#web-design", label: "Web Design" },
          { href: "#marketing", label: "Marketing" },
          { href: "#ads", label: "Google Ads" },
        ],
      },
      {
        title: "Helpful Links",
        links: [
          { href: "#faqs", label: "FAQs" },
          { href: "#support", label: "Support" },
          {
            href: "#live-chat",
            label: "Live Chat",
            hasIndicator: true,
          },
        ],
      },
      {
        title: "Contact Us",
        links: [
          {
            href: "mailto:analytica@email.com",
            label: "analytica@email.com",
            iconClass: "fas fa-envelope",
          },
          {
            href: "tel:+923051122338",
            label: "+923051122338",
            iconClass: "fas fa-phone",
          },
          {
            href: "#",
            label: "Lahore, Pakistan",
            iconClass: "fas fa-map-marker-alt",
          },
        ],
      },
    ],
    bottomLinks: [
      { href: "#terms", label: "Terms & Conditions" },
      { href: "#privacy", label: "Privacy Policy" },
    ],
  };
  