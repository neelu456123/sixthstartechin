"use client"

import React from 'react'
import Link from 'next/link';

const Footer = () => {
  // Define the sections array
  const footerSections = [
    {
      title: "COMPANY",
      links: [
        { name: "About", href: "/about/about-sixthstar" },
        { name: "Why Sixthstar", href: "/about/why-choose-us/" },
        { name: "Business Models", href: "#" },
        { name: "Testimonials", href: "#" },
        { name: "Clients", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Methodology", href: "#" },
        { name: "Sitemap", href: "/about/sitemap-2" },
        { name: "Privacy Policy", href: "#" },
        { name: "Acceptable Use Policy", href: "#" },
        { name: "Insights", href: "/blog" },
      ],
    },
    {
      title: "SERVERS",
      links: [
        { name: "Dedicated Servers", href: "/server/dedicated-server-hosting-provider-in-chennai" },
        { name: "VPS Server", href: "/server/vps-hosting-provider-in-india" },
        { name: "Cloud Server", href: "/server/cloud-hosting-companies-in-india" },
        { name: "Shared Server", href: "/server/shared-server-hosting-in-chennai" },
      ],
      extraTitle: "SECURITY",
      extraLinks: [
        { name: "SSL Certificate", href: "#" },
        { name: "Spam Filter", href: "/server/incoming-spam-filter" },
      ],
    },
    {
      title: "HOSTING",
      links: [
        { name: "Shared Hosting", href: "/server/shared-server-hosting-in-chennai" },
        { name: "Reseller Hosting", href: "#" },
        { name: "Dedicated Hosting", href: "/server/dedicated-server-hosting-provider-in-chennai" },
        { name: "Cloud Hosting", href: "/server/cloud-hosting-companies-in-india" },
        { name: "VPS Hosting", href: "/server/vps-hosting-provider-in-india" },
      ],
      extraTitle: "RESOURCES",
      extraLinks: [
        { name: "Domain", href: "#" },
        { name: "Blogs", href: "/blog" },
        { name: "Knowledge base", href: "#" },
        { name: "Visual hooks", href: "#" },
      ],
    },
    {
      title: "PRODUCTS",
      links: [
        { name: "CRM Software", href: "#" },
        { name: "Management Software", href: "#" },
        { name: "HMS Software", href: "#" },
        { name: "Payroll Software", href: "#" },
        { name: "SFTP Server", href: "#" },
      ],
      extraTitle: "SERVICES",
      extraLinks: [
        { name: "Web Development", href: "#" },
        { name: "Mobile App Development", href: "#" },
        { name: "SEO", href: "#" },
        { name: "High Availability", href: "#" },
      ],
    },
    {
      title: "MAIL SERVICES",
      links: [
        { name: "Zimbra Mail", href: "#" },
        { name: "Carbonio Mail", href: "#" },
        { name: "G Suite", href: "#" },
        { name: "Office 365", href: "#" },
        { name: "CPanel Hosting ", href: "#" },
        { name: "Enterprises Email", href: "#" },
        { name: "Mail Server Support", href: "#" },
      ],
      extraTitle: "Contact",
      extraLinks: [
        { name: "sales@sixthstar.in", href: "mailto:sales@sixthstar.in", icon: "fa fa-envelope" },
        { name: "support@sixthstar.in", href: "mailto:support@sixthstar.in", icon: "fa fa-envelope" },
        { name: "9962107399", href: "tel:+919962107399", icon: "fa-solid fa-phone" },
        { name: "9383996666", href: "tel:+919383996666", icon: "fa-solid fa-phone" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white  pt-4 pb-1" >
      <div className="mx-5  ">
        {/* Logo and Description Section */}
        <div className="row gap-5">
          <div className="col-12 col-lg-2 ">
            <div className="text-center text-lg-start">
              <img
                src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1733818437/logo_-_sx2_aiasw2.png"
                alt="logo"
                className="mb-3 bg-white rounded p-2"
                style={{ maxWidth: "180px" }}
              />
              <p className="small">
                With over 16+ years of expertise, Sixth Star Technology stands as a premier IT solution provider in India.
              </p>
              {/* Certificates Grid */}
              <div className="d-flex flex-wrap justify-content-center  flex-lg-wrap  gap-3">
                {[
                  "gdpr_qhmwv2.webp",
                  "rqc_vqtye4.webp",
                  "iso-20000_obiguc.webp",
                  "ukasl_ae4pum.webp",
                  "iso-27001_nenayk.webp"
                ].map((img, idx) => (
                  <img
                    key={idx}
                    src={`https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055888/${img}`}
                    alt="certification"
                    className='footer-img'
                    // style={{ width: "50px", height: "50px", objectFit: "contain" }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          <div className="col-12 col-lg-9 ">
     
      {/* Mobile Accordion */}
<div className="accordion accordion-flush d-lg-none mb-2 pb-2" id="footerAccordion">
  {footerSections.map((section, idx) => (
    <div key={idx}>
      {/* Main Section */}
      <div className="accordion-item bg-transparent" style={{border:"none"}}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed bg-transparent text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapseLinks${idx}`}
          >
            {section.title}
          </button>
        </h2>
        <div
          id={`collapseLinks${idx}`}
          className="accordion-collapse collapse"
          data-bs-parent="#footerAccordion"
        >
          <div className="accordion-body">
            <ul className="list-unstyled mb-0">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx} className="mb-2">
                  <a href={link.href} className="text-white text-decoration-none small">
                    {link.icon && <i className={`${link.icon} me-2`}></i>}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Extra Links Section */}
      {section.extraTitle && (
        <div className="accordion-item bg-transparent" style={{border:"none"}}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-transparent text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseExtraLinks${idx}`}
              aria-expanded="false"
              aria-controls={`collapseExtraLinks${idx}`}
            >
              {section.extraTitle}
            </button>
          </h2>
          <div
            id={`collapseExtraLinks${idx}`}
            className="accordion-collapse collapse"
            data-bs-parent="#footerAccordion"
          >
            <div className="accordion-body">
              <ul className="list-unstyled mb-0">
                {section.extraLinks.map((link, linkIdx) => (
                  <li key={linkIdx} className="mb-2">
                    <a href={link.href} className="text-white text-decoration-none small">
                      {link.icon && <i className={`${link.icon} me-2`}></i>}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  ))}
</div>

  
   
  
            {/* Desktop View Links */}
            <div className="row d-none d-lg-flex">           
              <div className="col-12">
                <div className="row justify-content-between">
                  {footerSections.map((section, idx) => (
                    <div key={idx} className="col-lg-2-4">
                      <div className="mb-4">
                        <h3 className="text-uppercase fw-bold fs-6 mb-4">{section.title}</h3>
                        <ul className="list-unstyled footer-links">
                          {section.links.map((link, linkIdx) => (
                            <li key={linkIdx} className="mb-3">
                              <a 
                                href={link.href} 
                                className="text-white text-decoration-none "
                              >
                                {link.icon && <i className={`${link.icon} me-2`}></i>}
                               <span className='small'>{link.name}</span> 
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {section.extraTitle === "Contact" ? (
  <div className="mt-4">
    <h3 className="text-uppercase fw-bold fs-6 mb-3">{section.extraTitle}</h3>
    <ul className="list-unstyled">
      {section.extraLinks.map((link, linkIdx) => (
        <li key={linkIdx} className="mb-2">
          <a 
            href={link.href} 
            className="text-white text-decoration-none contact-link"
          >
            <div className="d-flex align-items-center gap-3">
              {link.icon && <i className={`${link.icon} contact-icon`}></i>}
              <span className="contact-text small">{link.name}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
) : (
                        section.extraTitle && (
                          <div className="mt-4">
                            <h3 className="text-uppercase small fw-bold fs-6 mb-3">{section.extraTitle}</h3>
                            <ul className="list-unstyled footer-links">
                              {section.extraLinks.map((link, linkIdx) => (
                                <li key={linkIdx} className="mb-2">
                                  <a 
                                    href={link.href} 
                                    className="text-white text-decoration-none d-block footer-link"
                                  >
                                    {link.icon && <i className={`${link.icon} me-2`}></i>}
                                  <span className='small'> {link.name}</span> 
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons and Copyright */}
        <div className="row ">
          <div className="col-12 text-center">
            <div className="d-flex justify-content-center gap-3 ">
              {[
                "fa-youtube",
                "fa-facebook",
                "fa-x-twitter",
                "fa-instagram",
                "fa-linkedin",
              ].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="btn p-2  btn-outline-light btn-sm d-flex justify-content-center rounded-circle"
                  style={{ width: "30px", height: "30px" }}
                >
                  <i className={`fa-brands w-100 h-100 ${icon}`}></i>
                </a>
              ))}
            </div>
            <p className="small mt-2 mb-0 pb-2 border-bottom border-light">
              © Copyright 2024 | All Rights Reserved by{" "}
              <Link href="#" className="text-white text-decoration-none">
                Sixthstar tech
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
