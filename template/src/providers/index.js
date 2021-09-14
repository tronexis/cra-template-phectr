import { HelmetProvider } from "react-helmet-async";
import { ChakraProvider } from "@chakra-ui/react";

const Providers = ({ ...props }) => {
  return (
    <HelmetProvider>
      <ChakraProvider>{props.children}</ChakraProvider>
    </HelmetProvider>
  );
};

export default Providers;
