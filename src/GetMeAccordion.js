import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import faqData from "./Data";

function GetMeAccordion() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton
            border="none"
            paddingBottom="25px"
            borderBottom="1px solid #EAECF0"
            bg="white"
          >
            <Box
              flex="1"
              textAlign="left"
              fontFamily="Montserrat"
              fontWeight="600"
              letterSpacing="-0.02em"
              fontSize="20px"
              lineHeight="28px"
              w="100%"
            >
              {faqData[0].title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          // pb={4}
          fontFamily="Montserrat"
          fontWeight="400"
          letterSpacing="-0.02em"
          fontSize="16px"
          lineHeight="24px"
          paddingLeft="5px"
          marginBottom="10px"
        >
          {faqData[0].solution}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            border="none"
            paddingBottom="25px"
            borderBottom="1px solid #EAECF0"
            bg="white"
          >
            <Box
              flex="1"
              textAlign="left"
              fontFamily="Montserrat"
              fontWeight="600"
              letterSpacing="-0.02em"
              fontSize="20px"
              lineHeight="28px"
              w="100%"
            >
              {faqData[1].title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          // pb={4}
          fontFamily="Montserrat"
          fontWeight="400"
          letterSpacing="-0.02em"
          fontSize="16px"
          lineHeight="24px"
          paddingLeft="5px"
          marginBottom="10px"
        >
          {faqData[1].solution}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            border="none"
            paddingBottom="25px"
            borderBottom="1px solid #EAECF0"
            bg="white"
          >
            <Box
              flex="1"
              textAlign="left"
              fontFamily="Montserrat"
              fontWeight="600"
              letterSpacing="-0.02em"
              fontSize="20px"
              lineHeight="28px"
              w="100%"
            >
              {faqData[2].title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          // pb={4}
          fontFamily="Montserrat"
          fontWeight="400"
          letterSpacing="-0.02em"
          fontSize="16px"
          lineHeight="24px"
          paddingLeft="5px"
          marginBottom="10px"
        >
          {faqData[2].solution}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            border="none"
            paddingBottom="25px"
            borderBottom="1px solid #EAECF0"
            bg="white"
          >
            <Box
              flex="1"
              textAlign="left"
              fontFamily="Montserrat"
              fontWeight="600"
              letterSpacing="-0.02em"
              fontSize="20px"
              lineHeight="28px"
              w="100%"
            >
              {faqData[3].title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          // pb={4}
          fontFamily="Montserrat"
          fontWeight="400"
          letterSpacing="-0.02em"
          fontSize="16px"
          lineHeight="24px"
          paddingLeft="5px"
          marginBottom="10px"
        >
          {faqData[3].solution}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            border="none"
            paddingBottom="25px"
            borderBottom="1px solid #EAECF0"
            bg="white"
          >
            <Box
              flex="1"
              textAlign="left"
              fontFamily="Montserrat"
              fontWeight="600"
              letterSpacing="-0.02em"
              fontSize="20px"
              lineHeight="28px"
              w="100%"
            >
              {faqData[4].title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          // pb={4}
          fontFamily="Montserrat"
          fontWeight="400"
          letterSpacing="-0.02em"
          fontSize="16px"
          lineHeight="24px"
          paddingLeft="5px"
          marginBottom="10px"
        >
          {faqData[4].solution}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default GetMeAccordion;
