"use client";
import { createTheme } from "@mui/material/styles";
import { Catamaran } from "next/font/google";

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#28c3a6",
    },
  },
  typography: {
    fontFamily: catamaran.style.fontFamily,
  },
});

export default theme;
