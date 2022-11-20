import { Card, CardActionArea, Typography, Box } from "@mui/material";

import garantiaImage from "../../../assets/garantiaImage.png";
import logoImage from "../../../assets/logoImage.png";
import { CustomizedButton } from "../../../components/CustomizedButton";

export function PricingCard(): JSX.Element {
  return (
    <Card
      sx={{
        borderRadius: 4,
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: {
            xs: 412,
            md: 312,
            lg: 382,
          },
          boxShadow: 5,
          p: {
            xs: 1,
            md: 2,
          },
          backgroundColor: "gold.main",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/*    <img
            decoding="async"
            src={logoImage}
            style={{
              width: 220,
              height: 140,
            }}
          />
          <img
            decoding="async"
            src={garantiaImage}
            style={{
              width: 160,
              height: 160,
            }}
          /> */}
        </Box>

        <Typography textAlign="center" color="white.main" fontWeight="bold">
          De
          <Typography
            display="inline"
            paragraph
            color="red.main"
            sx={{
              textDecoration: "line-through",
            }}
          >
            &nbsp;R$2997,00&nbsp;
          </Typography>
          por <br />
          12x
          <Typography
            variant="h1"
            display="inline"
            paragraph
            color="green.main"
          >
            &nbsp;R$49,60&nbsp;
          </Typography>
          <br />
          ou R$497 à vista
        </Typography>
        <CustomizedButton
          sx={{
            p: "0 8px",
            color: "black.main",
            borderColor: "black.main",
          }}
        >
          VOU CONQUISTAR <br />
          MINHA LIBERDADE FINANCEIRA
        </CustomizedButton>
        <Typography variant="body2" color="red.main" fontWeight="bold">
          *Oferta especial válida por tempo limitado
        </Typography>
      </CardActionArea>
    </Card>
  );
}
