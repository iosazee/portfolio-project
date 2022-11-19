import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Zee!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#1B4F72"
  >
    <VStack>
      <Avatar size='2xl' name="Zee" src={require("../images/zee.jpg")}/>
      <Heading as='h6' size='xs'>{greeting}</Heading>
      <Heading as='h2' size='2xl'>{bio1}</Heading>
      <Heading as='h2' size='2xl'>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
