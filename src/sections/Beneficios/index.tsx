import { Grid, Typography, Box } from "@mui/material";

import { SectionContainer } from "../../components/SectionContainer";
import { SectionTitle } from "../../components/SectionTitle";

import doneIcon from "../../assets/icons/doneIcon.png";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { PricingCard } from "./components/PricingCard";

import dollarImage from "../../assets/dollarImage.webp";

const beneficios = [
  "Aulas ao vivo com tira dúvidas em tempo real;",
  "Acesso as lives exlusivas para alunos;",
  "Acesso por tempo ilimitado ao treinamento;",
  "Aulas gravadas com análise dos melhores F.I;",
  "Livro digital, best-seller em finanças na Amazon",
];

export function BeneficiosSection(): JSX.Element {
  const { isMobile } = useBreakpoints();

  return (
    <SectionContainer
      bgcolor="black.main"
      id="beneficios-section"
      sx={{
        scrollBehavior: "smooth",
        overflowY: "scroll",
        backgroundImage: `url(${dollarImage})`,
        backgroundSize: "cover",
      }}
    >
      <SectionTitle>
        APROVEITE
        <Typography display="inline" variant="h2" color="red.main" paragraph>
          &nbsp;83%&nbsp;
        </Typography>
        DE DESCONTO
      </SectionTitle>

      <Grid container spacing={3}>
        <Grid
          item
          xl={5.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            display="inline"
            variant="h3"
            color="gold.main"
            sx={{
              mb: {
                xs: 2,
                md: 0,
              },
            }}
          >
            O QUE VOCÊ VAI RECEBER?
          </Typography>
          {beneficios.map((beneficio, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              sx={{
                mb: 2,
              }}
            >
              <img
                src={doneIcon}
                style={{
                  width: isMobile ? 24 : 26,
                  height: isMobile ? 24 : 26,
                  marginRight: isMobile ? 4 : 12,
                }}
              />
              <Typography variant="body1" color="white.main">
                {beneficio}
              </Typography>
            </Box>
          ))}
          <Typography
            variant="body2"
            color="white.main"
            sx={{
              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
          >
            Garantindo a sua vaga AGORA na Manual da <br />
            Renda Passiva, você terá uma oferta especial <br />
            exclusiva para essa turma e ainda garante <br />
            todos os bônus exclusivos!
          </Typography>
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6.5}>
          <PricingCard />
        </Grid>
      </Grid>
    </SectionContainer>
  );
}
