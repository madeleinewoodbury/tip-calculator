import { Center, Box } from "@chakra-ui/react";
import Title from "./Title";
import Card from "./Card";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Box bg='cyan.200'>
      <Center
        width='100%'
        height={{ base: "auto", md: "calc(100vh - 100px)" }}
        display='flex'
        flexDirection='column'
      >
        <Title />
        <Card />
      </Center>
      <Footer />
    </Box>
  );
};

export default Layout;
