import { Typography, Theme, SxProps } from "@mui/material";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  sx?: SxProps<Theme> | undefined;
  color?: string;
};

export function SectionTitle({
  children,
  color = "white.main",
  sx,
}: Props): JSX.Element {
  return (
    <Typography
      variant="h2"
      color={color}
      sx={{
        textAlign: "center",
        mb: {
          xs: 2,
          md: 6,
        },
        lineHeight: 1.2,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
