import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useBreakpoints = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return {
    isMobile: isMobile,
  };
};
