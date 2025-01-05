import React from "react";
import { FOOTER_DATA } from "../staticData/Data";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center sm:justify-start">
              <h2 className="text-2xl font-bold uppercase text-primary">
                {FOOTER_DATA.about.title}
              </h2>
            </div>
            <p className="mt-6 max-w-md text-center leading-relaxed text-scondry sm:max-w-xs sm:text-left">
              {FOOTER_DATA.about.description}
            </p>
            <div className="mt-6 flex justify-center sm:justify-start gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary hover:text-opacity-80"
              >
                <Facebook fontSize="large" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary hover:text-opacity-80"
              >
                <Instagram fontSize="large" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-primary hover:text-opacity-80"
              >
                <Twitter fontSize="large" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-primary hover:text-opacity-80"
              >
                <LinkedIn fontSize="large" />
              </a>
            </div>
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start">
              {FOOTER_DATA.about.socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="nav-link"
                    aria-label={link.ariaLabel}
                  >
                    <i className={link.iconClass}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {FOOTER_DATA.sections.map((section, index) => (
              <div key={index} className="text-center sm:text-left">
                <p className="text-lg font-semibold text-gray-900">{section.title}</p>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className={`nav-link ${
                          link.hasIndicator
                            ? "flex items-center ml-24 lg:ml-0"
                            : ""
                        }`}
                      >
                        {link.label}
                        {link.hasIndicator && (
                          <span className="relative inline-flex ml-2 h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Analytica. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              {FOOTER_DATA.bottomLinks.map((link, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="mx-2">&middot;</span>}
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
