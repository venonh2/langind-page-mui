import { Box, Typography } from "@mui/material";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  textColor?: string;
};

import youtubeIcon from "../../../assets/icons/youtubeIcon.png";
import closeIcon from "../../../assets/icons/closeIcon.png";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

export function CardDepoimentAuthor({
  children,
  textColor = "white.main",
}: Props): JSX.Element {
  const { isMobile } = useBreakpoints();
  return (
    <>
      <img
        src={youtubeIcon}
        alt="icone do youtube"
        style={{
          position: "absolute",
          top: 4,
          left: 10,
          width: isMobile ? 26 : 32,
          height: isMobile ? 20 : 26,
        }}
      />

      <img
        src={closeIcon}
        alt="icone do youtube"
        style={{
          position: "absolute",
          top: 4,
          right: 4,
          width: isMobile ? 26 : 32,
          height: isMobile ? 26 : 32,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 12,
          left: 10,
        }}
      >
        <Typography color={textColor}>{children}</Typography>
      </Box>
    </>
  );
}
