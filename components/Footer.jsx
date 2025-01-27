"use client"

import React from 'react'
import Link from 'next/link';

const Footer = () => {
  // Define the sections array
  const footerSections = [
    {
      title: "COMPANY",
      links: [
        { name: "About", href: "/about" },
        { name: "Business Models", href: "/business-models" },
        { name: "Clients", href: "/client" },
        { name: "Sitemap", href: "/about/sitemap-2" },
        { name: "Privacy Policy", href: "#" },
        { name: "Acceptable Use Policy", href: "#" },
        { name: "Insights", href: "/blog" },
      ],
    },
    {
      title: "HOSTING",
      links: [
        { name: "Cloud Hosting", href: "/cloud-hosting" },
        { name: "Spam Filter", href: "/spamfilter" },
        { name: "SSl Cerificate", href: "/Ssl-Certificate" },
        { name: "Email Solutions", href: "https://sixthstartech.com/mail-services/carbonio-mail" },
      ],
      
    },
    {
      title: "RESOURCES",
      links: [
        { name: "Domain", href: "/server/shared-server-hosting-in-chennai" },
        { name: "Blogs", href: "#" },
        { name: "Knowledge base", href: "/server/dedicated-server-hosting-provider-in-chennai" },
       
      ],
    
    },
    {
      title: "Contact",
      links: [
        {name: "sales@sixthstar.in", href: "mailto:sales@sixthstar.in", icon: "fa fa-envelope" },
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
