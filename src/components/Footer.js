import { Center, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center
      as='footer'
      width='100%'
      height='100px'
      color='cyan.400'
      display='flex'
      flexDirection={{ base: "column", md: "row" }}
      padding='20px'
    >
      <Text paddingRight='5px'>
        Challenge by{" "}
        <Link
          color='cyan.500'
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
        >
          Frontend Mentor
        </Link>
        .
      </Text>
      <Text>
        Coded by{" "}
        <Link
          color='cyan.500'
          href='https://github.com/madeleinewoodbury'
          target='_blank'
        >
          Madeleine Woodbury
        </Link>
        .
      </Text>
    </Center>
  );
};

export default Footer;
