import { Box, Theme, SxProps } from "@mui/material";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  sx?: SxProps<Theme> | undefined;
  id?: string;
  bgcolor?: string;
};

export function SectionContainer({
  children,
  bgcolor = "white.main",
  id,
  sx,
}: Props): JSX.Element {
  return (
    <Box
      id={id}
      bgcolor={bgcolor}
      sx={{
        px: {
          xs: 2.4,
          md: 8,
          lg: 12,
        },
        pt: {
          xs: 4,
          md: 6,
        },
        pb: 3,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
