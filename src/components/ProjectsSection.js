import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Shopping App",
    description:
      "An ecommerce shopping application solution built with react",
    getImageSrc: () => require("../images/photo1.jpg"),
    hrefSrc: "https://shopping-web-app.netlify.app",
  },
  {
    title: "Online Trivia Game",
    description:
      "A simple online multiplayer trivia game built with React.JS 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
    hrefSrc: "https://zeetriviagame.netlify.app",
  },
  {
    title: "Online Quote Generator",
    description:
      "A simple quote generator built with HTML, CSS & JavaScript",
    getImageSrc: () => require("../images/photo3.jpg"),
    hrefSrc: "https://online-quote-generator.netlify.app",
  },
  {
    title: "React Portfolio Project",
    description:
      "A portfolio web app built with React incorporating Chakra UI elements.",
    getImageSrc: () => require("../images/photo4.jpg"),
    hrefSrc: "https://zee-portfolio-app.netlify.app",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            hrefSrc={project.hrefSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
