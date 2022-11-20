import { Typography, Box, Grid, Stack } from "@mui/material";
import { CustomizedButton } from "../../components/CustomizedButton";

import heroImage from "../../assets/heroImage.webp";
import heroImageXL from "../../assets/heroImageXL.webp";

import logoImage from "../../assets/logoImage.png";
import { useBreakpoints } from "../../hooks/useBreakpoints";

export function BannerSection(): JSX.Element {
  const { isMobile } = useBreakpoints();

  return (
    <Box
      sx={{
        backgroundImage: {
          xs: `url(${heroImage})`,
          lg: `url(${heroImageXL})`,
        },
        backgroundSize: "cover",
        height: 716,
        px: {
          xs: 2.4,
          md: 8,
          lg: 12,
        },
        pb: {
          xs: 2.4,
          md: 6,
          lg: 10,
        },
      }}
    >
      <Grid
        container
        sx={{
          height: "100%",
        }}
      >
        <Grid
          item
          lg={12}
          xl={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "100%",
          }}
        >
          <Stack spacing={3}>
            <img
              decoding="async"
              src={logoImage}
              style={{
                width: isMobile ? 214 : 314,
                height: isMobile ? 90 : 152,
                marginLeft: -10,
              }}
            />

            <Typography color="white.main" variant="h1" fontWeight="bold">
              Aprenda a
              <Typography
                color="gold.main"
                variant="h1"
                display="inline"
                fontWeight="bold"
                paragraph
              >
                &nbsp;INVESTIR
                <br />
              </Typography>
              de forma simplificada <br />e com as estratégias{" "}
              <Typography
                color="gold.main"
                variant="h1"
                display="inline"
                fontWeight="bold"
                paragraph
              >
                <br />
                CORRETAS
              </Typography>{" "}
              para uma carteira lucrativa
            </Typography>

            <Typography color="white.main" variant="body1">
              Você aprenderá o passo-a-passo para investir, <br /> mesmo
              começando do zero, com pouco <br />
              conhecimento e dinheiro.
            </Typography>
            <CustomizedButton>
              <a
                href="#beneficios-section"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                QUERO VIVER DE RENDA PASSIVA
              </a>
            </CustomizedButton>
          </Stack>
        </Grid>

        <Grid item lg={6}></Grid>
      </Grid>
    </Box>
  );
}
