import { Box } from "@mui/material";

import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export function Layout({ children }: Props) {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        minWidth: 312,
        maxWidth: "100vw",
      }}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
