import {
  Typography,
  Card as MUICard,
  CardActionArea,
  SxProps,
  Theme,
} from "@mui/material";

type Props = {
  icon: string;
  title: string;
  text: string;
  xs?: SxProps<Theme> | undefined;
};

export function Card({ icon, text, title, xs }: Props): JSX.Element {
  return (
    <MUICard
      variant="outlined"
      sx={{
        boxShadow: 1,
        backgroundColor: "black.main",
        borderRadius: 4,
        ":hover": {
          boxShadow: 5,
        },
        maxWidth: 500,
        ...xs,
      }}
    >
      <CardActionArea
        sx={{
          p: 3.5,
        }}
      >
        <img
          src={icon}
          style={{
            width: 120,
            height: 120,
            marginBottom: 16,
          }}
        />
        <Typography variant="h3" color="gold.main" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body1" color="white.main" fontWeight="bold">
          {text}
        </Typography>
      </CardActionArea>
    </MUICard>
  );
}
