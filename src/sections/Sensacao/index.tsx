import { Typography, Stack } from "@mui/material";

import brainIcon from "../../assets/icons/brainIcon.png";
import goalIcon from "../../assets/icons/goalIcon.png";
import planetIcon from "../../assets/icons/planetIcon.png";
import timeAndMoneyIcon from "../../assets/icons/timeAndMoneyIcon.png";
import { CustomizedButton } from "../../components/CustomizedButton";
import { ListContainer } from "../../components/ListContainer";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionTitle } from "../../components/SectionTitle";
import { Card } from "./components/Card";

const icons = [
  {
    url: brainIcon,
    title: "Do ínicio ao fim.",
    text: "As melhores estratégias para crescer sua renda passiva. Começando do zero.",
  },
  {
    url: goalIcon,
    title: "Mente blindada.",
    text: "Como ter a mentalidade certa para investir com consistência e segurança.",
  },
  {
    url: planetIcon,
    title: "A trajetória",
    text: "O caminho necessário para alcançar a liberdade financeira e geográfica",
  },
  {
    url: timeAndMoneyIcon,
    title: "Longo prazo.",
    text: "Como enxergar e escolher as melhores oportunidades na bolsa de valores.",
  },
];

export function SensacaoSection(): JSX.Element {
  return (
    <SectionContainer bgcolor="gray.main">
      <SectionTitle>VOCÊ SABE QUE MEREÇE MAIS</SectionTitle>
      <ListContainer>
        {icons.map((icon, index) => (
          <Card
            key={index}
            icon={icon.url}
            title={icon.title}
            text={icon.text}
            xs={{
              mb: {
                xs: 0,
                lg: index % 2 === 0 ? 8 : 0,
              },
              mt: {
                xs: 0,
                lg: index % 2 !== 0 ? 8 : 0,
              },
            }}
          />
        ))}
      </ListContainer>

      <Stack
        spacing={3}
        sx={{
          py: {
            xs: 4,
            md: 6,
          },
          px: {
            xs: 0,
            lg: 16,
          },
        }}
      >
        <Typography
          variant="body2"
          color="white.main"
          sx={{
            textAlign: "center",
          }}
          paragraph
        >
          Seja você um investidor iniciante que deseja dar os primeiros passos
          de forma segura ou um investidor mais experiente que deseja ter um
          método para potencializar seus resultados, através do Manual da Renda
          Passiva,
          <Typography
            variant="body2"
            color="gold.main"
            fontWeight="bold"
            display="inline"
            paragraph
          >
            &nbsp;você vai estar a frente de 99% dos investidores.
          </Typography>
        </Typography>
        <CustomizedButton
          sx={{
            color: "gold.main",
            alignSelf: "center",
          }}
        >
          <a
            href="#beneficios-section"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            QUERO CONQUISTAR MINHA LIBERDADE FINANCEIRA
          </a>
        </CustomizedButton>
      </Stack>
    </SectionContainer>
  );
}
