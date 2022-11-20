import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export function ListContainer({ children }: Props): JSX.Element {
  return (
    <Box
      sx={{
        display: "grid",
        gap: { xs: 2, md: 2.5 },
        gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
      }}
    >
      {children}
    </Box>
  );
}
