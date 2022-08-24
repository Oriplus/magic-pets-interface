import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <Flex minH="100vh" direction="column">
      <Navbar />
      <Box mx="auto" p={4} maxW={"7xl"} width="100%" id={"content"}>
        {children}
      </Box>
      <Footer/>
    </Flex>
  );
};

export default Layout;
