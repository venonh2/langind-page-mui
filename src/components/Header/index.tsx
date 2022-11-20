import { Box, Typography } from "@mui/material";

export function Header() {
  return (
    <Box
      bgcolor="gold.main"
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
          color="black.main"
          fontWeight="500"
          sx={{
            fontSize: {
              xs: 10,
              xl: 16,
            },
            textAlign: "center",
          }}
        >
          Este conteúdo é 100% educação financeira e não envolve recomendações
          de compra, venda ou manutenção do ativo. <br />
          Retornos passados não são garantia de retorno futuro. Todo
          investimento envolve riscos e pode causar perdas ao investidor.
        </Typography>
      </Box>
    </Box>
  );
}
