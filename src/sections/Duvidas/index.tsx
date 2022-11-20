import { useState } from "react";
import { Typography, Accordion, styled } from "@mui/material";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionTitle } from "../../components/SectionTitle";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";

import { CustomizedButton } from "../../components/CustomizedButton";

import whatsappIcon from "../../assets/icons/whatsappIcon.png";
import arrowForwardIcon from "../../assets/icons/arrowForwardIcon.png";

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <img
        src={arrowForwardIcon}
        style={{
          width: 16,
          height: 16,
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const duvidas = [
  {
    title: "Quando eu recebo o acesso ao treinamento?",
    text: "Você recebe o acesso após a confirmação do seu pagamento. Se você realizou a compra por cartão de crédito o acesso é imediato, se realizou a compra por boleto, o acesso é liberado após o período de compensação dos bancos.",
  },
  {
    title: "Por quanto tempo terei acesso ao treinamento?",
    text: "Você terá o treinamento por tempo indeterminado e poderá acessar as aulas de onde estiver e quando quiser.",
  },
  {
    title: "Como saber se o Manual da Renda Passiva é para mim?",
    text: "Independente do seu nível de conhecimento sobre investimentos, o treinamento vai te ajudar em todo o processo, focando em te ensinar o caminho para crescer seu patrimônio e gerar renda passiva mensal. Do zero ao avançado!",
  },
  {
    title: "Consigo assistir pelo celular?",
    text: "Sim! Você consegue acessar o curso a qualquer hora e de onde estiver pelo computador, celular ou tablet.",
  },
  {
    title: "Não consigo acessar o curso, o que faço?",
    text: "Se você estiver com dificuldades para acessar, chame nosso suporte no WhatsApp para que possamos resolver seu problema!",
  },
];

export function DuvidasSection(): JSX.Element {
  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <SectionContainer bgcolor="gray.main">
      <SectionTitle>DÚVIDAS FREQUENTES</SectionTitle>

      {duvidas.map((duvida, index) => (
        <Accordion
          key={index}
          expanded={expanded === String(index)}
          onChange={handleChange(String(index))}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="body1" color="gray.main">
              {duvida.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{duvida.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Typography
        variant="body2"
        color="white.main"
        sx={{
          mt: {
            xs: 2,
            md: 4,
          },
        }}
      >
        Ainda com dúvidas? Fale conosco !!
      </Typography>
      <CustomizedButton
        sx={{
          p: 1,
          mt: 2,
          backgroundColor: "green.main",
          color: "white.main",
          borderColor: "green.main",
          alignItems: "center",
          ":hover": {
            backgroundColor: "green.main",
            color: "white.main",
            borderColor: "green.main",
          },
        }}
      >
        <img
          src={whatsappIcon}
          style={{
            width: 18,
            height: 18,
            margin: "0 8px 0 8px",
          }}
        />
        CHAMAR NO WHATSAPP
      </CustomizedButton>
    </SectionContainer>
  );
}
