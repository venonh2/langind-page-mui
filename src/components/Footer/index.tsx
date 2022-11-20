import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box
      bgcolor="black.main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 94,
      }}
    >
      <Box
        sx={{
          maxWidth: "xl",
          px: {
            xs: 6,
          },
        }}
      >
        <Typography
          color="white.main"
          fontWeight="500"
          sx={{
            fontSize: {
              xs: 10,
              xl: 16,
            },
            textAlign: "center",
          }}
        >
          Rob Correa ® 2022 | Todos os direitos reservados
        </Typography>
      </Box>
    </Box>
  );
}
