import React from "react";
import { ThemeProvider } from "styled-components";

// const theme1 = {
//   colors: {
//     primary: "#81c784",
//     primaryLight: "#b2fab4",
//     primaryDark: "#519657",
//     secondary: "#757575",
//     secondaryLight: "#a4a4a4",
//     secondaryDark: "#494949",
//     background: "#fff"
//   },
//   fonts: {
//     primary: "#000",
//     primaryLight: "#000",
//     primaryDark: "#000",
//     secondary: "#fff",
//     secondaryLight: "#000",
//     secondaryDark: "#fff",
//     error: "#b00020"
//   },
//   fontSizes: {
//     small: "1em",
//     medium: "1.2em",
//     large: "1.4em",
//   },
// };

const theme2 = {
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
  <ThemeProvider theme={theme2}>{children}</ThemeProvider>
);

export default Theme;