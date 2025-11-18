"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaLaravel,
  FaVuejs,
  FaAws,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiDocker,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Full Stack Developer with 8+ years of experience building web applications with React, Next.js, Node.js, Laravel, and the Microsoft 365 ecosystem. I like taking messy, manual workflows and turning them into clean, reliable tools that actually get used.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Joseph Emmanuel",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 514 893 9188",
    },
    {
      fieldName: "Experience",
      fieldValue: "8+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "joseph.emmanuel@outlook.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Snapshot of the companies and roles where I’ve been building full-stack web applications, content systems, and internal tools.",
  items: [
    {
      company: "Great Builder Solutions",
      position: "Full Stack Developer",
      duration: "2021 - Present",
    },
    {
      company: "Dulcedo Management",
      position: "Full Stack Web Developer",
      duration: "2019 - 2021",
    },
    {
      company: "SLB",
      position: "Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Unilog Content Solutions",
      position: "Software Engineer",
      duration: "2015 - 2016",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Formal education in Computer Science plus focused training around web technologies and software engineering.",
  items: [
    {
      institution: "ISI - Montreal",
      degree: "Programming & Web Technologies",
      duration: "2019 - 2021",
    },
    {
      institution: "VTU - Bangalore",
      degree: "M.Tech in Computer Science",
      duration: "2015 - 2017",
    },
    {
      institution: "CUFE - Bangalore",
      degree: "B.Tech in Computer Science",
      duration: "2010 - 2014",
    },
  ],
};

// skills data – icons + detailed categories
const skills = {
  title: "Technical skills & certifications",
  description:
    "Core technologies I use day-to-day plus the platforms, tools, and certifications I’ve picked up along the way.",
  // Icon grid – keep this focused on core stack
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript (ES6+)",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      icon: <FaVuejs />,
      name: "Vue.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
  // Detailed text sections mapped from your Technical Skills & Certifications
  categories: [
    {
      title: "Web & Frameworks",
      items: [
        "Next.js",
        "React",
        "Laravel",
        "Node.js",
        "Vue.js",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "PHP", "Python", "C#", "SQL"],
    },
    {
      title: "Databases",
      items: ["MySQL", "PostgreSQL", "Firebase", "MSSQL"],
    },
    {
      title: "Content Systems",
      items: ["Strapi", "HubSpot CMS", "SharePoint", "WordPress", "Drupal"],
    },
    {
      title: "DevOps & Cloud",
      items: [
        "GitHub Actions",
        "Azure DevOps",
        "Docker",
        "Netlify",
        "Vercel",
        "Bitbucket",
        "AWS",
      ],
    },
    {
      title: "Automation & AI",
      items: [
        "OpenAI API",
        "Google ADK (Agents Development Kit)",
        "GitHub Copilot",
        "n8n",
        "Prompt Engineering",
        "Cursor",
      ],
    },
    {
      title: "Project & Workflow",
      items: [
        "Agile / Scrum",
        "Sprint Planning",
        "Jira",
        "Trello",
        "Azure Boards",
      ],
    },
    {
      title: "Testing & Debugging",
      items: [
        "Jest",
        "Postman",
        "Swagger",
        "Chrome DevTools",
        "ESLint",
        "Prettier",
      ],
    },
    {
      title: "Design & UX",
      items: [
        "Figma",
        "Adobe XD",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Accessibility (WCAG, ARIA, Semantic HTML)",
      ],
    },
    {
      title: "APIs & Integrations",
      items: [
        "RESTful APIs",
        "Microsoft Graph API",
        "Google Maps",
        "Mapbox",
        "Instagram API",
        "HubSpot API",
      ],
    },
    {
      title: "Analytics & SEO",
      items: [
        "Google Analytics",
        "Google Tag Manager",
        "Google Search Console",
      ],
    },
    {
      title: "Certifications",
      items: [
        "Google ADK (Agents Development Kit) — Google",
        "HubSpot Service Hub Software — HubSpot Academy",
        "Integrating with HubSpot I: Foundations — HubSpot Academy",
        "SEO Fundamentals — General Assembly",
        "JavaScript Algorithms & Data Structures",
      ],
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                {/* Icon grid */}
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>

                {/* Detailed categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {skills.categories.map((category, index) => (
                    <div
                      key={index}
                      className="bg-[#232329] rounded-xl p-5 flex flex-col gap-2"
                    >
                      <h4 className="text-lg font-semibold text-accent">
                        {category.title}
                      </h4>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {category.items.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
