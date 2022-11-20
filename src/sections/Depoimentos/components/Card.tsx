import { Card as MUICard, CardActionArea, SxProps, Theme } from "@mui/material";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  sx?: SxProps<Theme> | undefined;
  onClick?: () => void;
};

export function Card({ children, onClick, sx }: Props): JSX.Element {
  return (
    <MUICard
      onClick={onClick}
      sx={{
        boxShadow: 2,
        height: "100%",
        position: "relative",
        borderRadius: {
          xs: 2,
          md: 3,
        },
        ":hover": {
          boxShadow: 5,
        },
        ...sx,
      }}
    >
      <CardActionArea
        sx={{
          height: "100%",
          p: {
            xs: 1,
            md: 2,
          },
        }}
      >
        {children}
      </CardActionArea>
    </MUICard>
  );
}
