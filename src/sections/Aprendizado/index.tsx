import { Box, Typography } from "@mui/material";
import { ListContainer } from "../../components/ListContainer";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionTitle } from "../../components/SectionTitle";

const aprendizados = [
  "1. COMO FUNCIONA O CICLO DO MERCADO IMOBILIÁRIO",
  "2. VANTAGENS E BENEFÍCIOS DOS FUNDOS IMOBILIÁRIOS",
  "3. OS TIPOS DE FUNDOS IMOBILIÁRIOS (FIIS)",
  "4. COMO ANALISAR UM FUNDO IMOBILIÁRIO (FII)",
  "5. OS MELHORES FUNDOS IMOBILIÁRIOS DE GALPÕES LOGÍSTICOS",
  "6. OS MELHORES FUNDOS IMOBILIÁRIOS DE ESCRITÓRIOS",
  "7. OS MELHORES FUNDOS IMOBILIÁRIOS DE SHOPPINGS CENTERS",
  "8. OS MELHORES FUNDOS IMOBILIÁRIOS DE PAPÉIS",
  "9. OS MELHORES FIAGROS",
  "10. OS MELHORES FUNDOS DE INFRAESTRUTURA",
  "11. COMO MONTAR E GERENCIAR SUA CARTEIRA",
  "12. DECLARAÇÃO DE IMPOSTO DE RENDA NA PRÁTICA",
];

export function AprendizadoSection(): JSX.Element {
  return (
    <SectionContainer bgcolor="black.main">
      <SectionTitle>O QUE VOCÊ VAI EFETIVAMENTE APRENDER ?</SectionTitle>
      <Box
        sx={{
          maxWidth: "xl",
          margin: "0 auto",
        }}
      >
        <ListContainer>
          {aprendizados.map((aprendizado, index) => (
            <Box
              key={index}
              sx={{
                mb: {
                  xs: 1,
                  md: 6,
                },
                p: 0,
              }}
            >
              <Typography
                variant="body1"
                color="gold.main"
                fontWeight="600"
                lineHeight={1.2}
              >
                {aprendizado}
              </Typography>
            </Box>
          ))}
        </ListContainer>
      </Box>
    </SectionContainer>
  );
}
