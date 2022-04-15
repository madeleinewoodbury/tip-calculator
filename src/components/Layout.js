import { Center } from "@chakra-ui/react";
import Title from "./Title";
import Card from "./Card";

const Layout = () => {
  return (
    <Center
      width='100%'
      height={{ base: "auto", md: "100vh" }}
      bg='cyan.200'
      display='flex'
      flexDirection='column'
    >
      <Title />
      <Card />
    </Center>
  );
};

export default Layout;
