import { useState } from "react";
import { Typography, Grid } from "@mui/material";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionTitle } from "../../components/SectionTitle";
import { Card } from "./components/Card";
import { CardDepoimentAuthor } from "./components/CardDepoimentAuthor";
import { useBreakpoints } from "../../hooks/useBreakpoints";

const DEFAULT_GRID_CONFIG = {
  active: "",
  leftGrid: {
    grid: {
      lg: 8,
      display: "flex",
    },
  },
  rightGrid: {
    grid: {
      lg: 4,
      display: "flex",
    },
    cards: {
      card2: "flex",
      card3: "flex",
    },
  },
};

function ActiveCard({ card }: { card: boolean }) {
  const { isMobile } = useBreakpoints();
  if (!card) return null;

  return (
    <iframe
      width="100%"
      height={isMobile ? "72%" : "80%"}
      src="https://www.youtube.com/embed/tgbNymZ7vqY"
      style={{
        borderRadius: 4,
      }}
    />
  );
}

export function DepoimentosSection(): JSX.Element {
  const [selectedDepointment, setSelectedDepointment] =
    useState(DEFAULT_GRID_CONFIG);

  const handleCardClick = (card: string) => {
    if (selectedDepointment.active) {
      setSelectedDepointment(DEFAULT_GRID_CONFIG);
      return;
    }
    switch (card) {
      case "card-1":
        setSelectedDepointment({
          active: "card-1",
          leftGrid: {
            grid: {
              lg: 12,
              display: "flex",
            },
          },
          rightGrid: {
            grid: {
              lg: 0,
              display: "none",
            },
            cards: {
              card2: "none",
              card3: "none",
            },
          },
        });
        break;
      case "card-2":
        setSelectedDepointment({
          active: "card-2",
          leftGrid: {
            grid: {
              lg: 0,
              display: "none",
            },
          },
          rightGrid: {
            grid: {
              lg: 12,
              display: "flex",
            },
            cards: {
              card2: "flex",
              card3: "none",
            },
          },
        });
        break;

      case "card-3":
        setSelectedDepointment({
          active: "card-3",
          leftGrid: {
            grid: {
              lg: 0,
              display: "none",
            },
          },
          rightGrid: {
            grid: {
              lg: 12,
              display: "flex",
            },
            cards: {
              card2: "none",
              card3: "flex",
            },
          },
        });
        break;

      default:
        break;
    }
  };

  return (
    <SectionContainer bgcolor="gray.main">
      <SectionTitle>CONFIRA COM QUEM JÁ APROVOU O MÉTODO</SectionTitle>

      <Grid
        container
        spacing={2}
        sx={{
          height: 512,
        }}
      >
        <Grid
          item
          lg={selectedDepointment.leftGrid.grid.lg}
          display={selectedDepointment.leftGrid.grid.display}
        >
          <Card
            onClick={() => handleCardClick("card-1")}
            sx={{
              backgroundColor: "gold.main",
              width: "100%",
            }}
          >
            <ActiveCard card={selectedDepointment.active === "card-1"} />
            <Typography variant="body2" color="black.main">
              Me ajudou muito principalmente em como saber como traçar uma
              estratégia no longo prazo seja em ativos nacionais ou
              internacionais.
            </Typography>
            <CardDepoimentAuthor textColor="black.main">
              Maria Lucia.
            </CardDepoimentAuthor>
          </Card>
        </Grid>
        <Grid
          item
          lg={selectedDepointment.rightGrid.grid.lg}
          display={selectedDepointment.rightGrid.grid.display}
          flexDirection="column"
        >
          <Card
            onClick={() => handleCardClick("card-2")}
            sx={{
              backgroundColor: "black.main",
              mb: 2,
              display: selectedDepointment.rightGrid.cards.card2,
            }}
          >
            <ActiveCard card={selectedDepointment.active === "card-2"} />
            <Typography variant="body2" color="white.main">
              O Rob foi super bom ele nos deu muitos atralhos, oque me deu muita
              segurança e também me ajudou a traçar melhor minhas estratégias.
            </Typography>
            <CardDepoimentAuthor>Pedro Henrique.</CardDepoimentAuthor>
          </Card>
          <Card
            onClick={() => handleCardClick("card-3")}
            sx={{
              backgroundColor: "cyan.main",
              display: selectedDepointment.rightGrid.cards.card3,
            }}
          >
            <ActiveCard card={selectedDepointment.active === "card-3"} />
            <Typography variant="body2" color="white.main">
              Eu quero idenpendencia financeira e o Rob me ajudou a traçar o
              caminho que tenho que seguir para alcançar meus objetivos.
            </Typography>
            <CardDepoimentAuthor textColor="black.main">
              Brendow E. R.
            </CardDepoimentAuthor>
          </Card>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}
