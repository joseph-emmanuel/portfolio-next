import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/joseph-emmanuel" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/joseph-emmanuel-1a8000135/",
  },
  {
    icon: <FaStackOverflow />,
    path: "https://stackoverflow.com/users/13524653/joseph-emmanuel",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
