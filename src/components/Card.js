import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg='grey' borderRadius='xl' >
      <Image src={imageSrc} alt={title} />
      <VStack padding='5' align='start'>
        <Heading as='h3' size='lg' color='black'>
          {title}
        </Heading>
        <Text fontSize='lg' color='black'>
          {description}
        </Text>
        <HStack>
          <Heading as='h4' size='sm' color='black'>
            <a href="">See More</a> 
          </Heading>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
