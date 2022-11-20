import { Button, SxProps, Theme, Typography } from "@mui/material";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  sx?: SxProps<Theme> | undefined;
};

export function CustomizedButton({ children, sx }: Props): JSX.Element {
  return (
    <Button
      color="warning"
      variant="outlined"
      sx={{
        borderRadius: 2,
        py: 1.5,
        borderColor: "gold.main",
        color: "gold.main",
        ...sx,
      }}
    >
      <Typography>{children}</Typography>
    </Button>
  );
}
