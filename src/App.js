import { TipProvider } from "./context/TipContext";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout";

function App() {
  return (
    <TipProvider>
      <ChakraProvider theme={theme}>
        <Layout />
      </ChakraProvider>
    </TipProvider>
  );
}

export default App;
