import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#797979",
      contrastText: "#FFFAFA",
      dark: "#26272B",
    },
    secondary: {
      main: "#FFFAFA",
      contrastText: "#c4c4c4",
      dark: "#00CCCC",
    },
  },
  typography: {
    fontFamily: "Uchen-Regular",
    fontSize: 18,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        style: {
          background: "transparent",
          boxShadow: "none",          
          textAlign: "center",
          position: "absolute",
          top: 50,
          left: 0,
        }
      }
    }
  }
});

export default theme;

declare module '@mui/material/styles' {
    interface TypographyVariants {
        extraLargeTitle: React.CSSProperties;
        subTitle: React.CSSProperties;
        smallTitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    extraLargeTitle?: React.CSSProperties;
    subTitle?: React.CSSProperties;
    smallTitle?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
      extraLargeTitle: true;
      subTitle: true;
      smallTitle: true;
    }
  }