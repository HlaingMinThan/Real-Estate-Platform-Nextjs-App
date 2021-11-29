import Head from "next/head";
import { Box } from "@chakra-ui/react";
export default function ({ children }) {
  return (
    <div>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header>Navbar</header>
        <main>{children}</main>
        <footer>footer</footer>
      </Box>
    </div>
  );
}
