"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Applications",
    description:
      "Design and build end-to-end web applications using Next.js, React, Node.js, and Laravel — from database and APIs to pixel-perfect UI.",
    href: "",
  },
  {
    num: "02",
    title: "CMS & SharePoint Solutions",
    description:
      "Implement and customize Strapi, HubSpot, WordPress, and SharePoint (SPFx) to streamline content workflows and internal tools.",
    href: "",
  },
  {
    num: "03",
    title: "Integrations, Automation & AI",
    description:
      "Connect CRMs, APIs, and third-party services, automate workflows with n8n/Power Automate, and integrate AI using OpenAI and Google ADK.",
    href: "",
  },
  {
    num: "04",
    title: "Performance, Analytics & SEO",
    description:
      "Optimize sites for speed, Core Web Vitals, and SEO, while wiring up analytics with Google Analytics, Tag Manager, and Search Console.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
