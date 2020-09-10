import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#81c784",
    primaryLight: "#b2fab4",
    primaryDark: "#519657",
    secondary: "#757575",
    secondaryLight: "#a4a4a4",
    secondaryDark: "#494949",
    background: "#fff"
  },
  fonts: {
    primary: "#000",
    primaryLight: "#000",
    primaryDark: "#000",
    secondary: "#fff",
    secondaryLight: "#000",
    secondaryDark: "#fff",
    error: "#b00020"
  },
  fontSizes: {
    small: "1em",
    medium: "1.2em",
    large: "1.4em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;