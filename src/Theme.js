import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#81c784",
    primaryLight: "#b2fab4",
    primaryDark: "#519657",
    secondary: "#ff7043",
    secondaryLight: "#ffa270",
    secondaryDark: "#c63f17",
    background: "#fafafa"
  },
  fonts: {
    primary: "#000",
    primaryLight: "#000",
    primaryDark: "#000",
    secondary: "#000",
    secondaryLight: "#000",
    secondaryDark: "#fff",
    error: "#b00020"
  },
  fontSizes: {
    small: "0.8em",
    medium: "1em",
    large: "1.2em",
    huge: "1.4em"
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;