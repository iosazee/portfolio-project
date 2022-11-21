import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: zeemudia@outlook.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/iosazee",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/zeemudia",
  },
];



const Header = () => {


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerDir = useRef(undefined);

  useEffect(() => {
    const currentPosition = headerDir.current;
    let lastPosition = window.scrollY;
    const handleScroll = () => {
      if (lastPosition > window.scrollY) {
        currentPosition.style.transform = "translateY(0)";
      } else {
        currentPosition.style.transform = "translateY(-200px)";
      }
      lastPosition = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const showSocials = socials.map(item => {return (
    <li key={item.url} style={{listStyle: "none"}}>
      { <a href={item.url}>
        <FontAwesomeIcon icon={item.icon} size="2x" />
        </a>
      }
    </li>)})


  return (
    <Box
      ref={headerDir}
      color="white"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="sticky"
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack direction={"row"} gap={2}>
              {showSocials}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              
              <a href="#projects-section" onClick={handleClick("projects")} >Projects</a>
              <a href="#contactme-section" onClick={handleClick("contactme")} >Contact Me</a>
                
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
