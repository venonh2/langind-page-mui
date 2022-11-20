import { createTheme } from "@mui/material/styles";

//#region adicionando propriedades ao tema
declare module "@mui/material/styles" {
  interface PaletteOptions {
    cyan?: {
      main: string;
    };
    gold: {
      main: string;
    };
    gray: {
      main: string;
    };
    white: {
      main: string;
    };
    red: {
      main: string;
    };
    green: {
      main: string;
    };
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    cyan?: {
      main: string;
    };
    gold: {
      main: string;
    };
    gray: {
      main: string;
    };
    black: {
      main: string;
    };
    red: {
      main: string;
    };
    green: {
      main: string;
    };
  }
}
//#endregion

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 620, // mobile
      md: 768, // tablet
      lg: 1024, // laptop
      xl: 1280,
    },
  },
  typography: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
  },
  palette: {
    cyan: {
      main: "#abb8c3",
    },
    gold: {
      main: "#fcb900",
    },
    gray: {
      main: "#373737",
    },
    white: {
      main: "#ffff",
    },
    black: {
      main: "#1B1B1B",
    },
    red: {
      main: "#ff0000",
    },
    green: {
      main: "#00A516",
    },
  },
});

//#region responsividade fontes

// banner principal
theme.typography.h1 = {
  fontSize: "1rem",
  fontFamily: "Poppins",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.25rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.625rem",
  },
};

// titulos de seções
theme.typography.h2 = {
  fontSize: "1rem",
  fontWeight: "bold",
  fontFamily: "Poppins",

  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.25rem",
  },
};

// titulos de card e vantagens
theme.typography.h3 = {
  fontSize: "1rem",
  fontFamily: "Poppins",

  [theme.breakpoints.down("sm")]: {
    fontSize: "1.375rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.625rem",
  },
};

theme.typography.body1 = {
  fontSize: "1rem",
  fontFamily: "Poppins",

  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.375rem",
  },
};

theme.typography.body2 = {
  fontSize: "1rem",
  fontFamily: "Poppins",

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.125rem",
  },
};

//#endregion

export { theme };
