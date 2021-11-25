import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import React from "react";
import Header from "./Header";
import LandingBanner from "./components/LandingBanner";
import LandingFarmInfo from "./components/LandingFarmInfo";

export default function Main() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
      }}
    >
      <Header />
      <Divider
        sx={{
          zIndex: 1,
          height: "2px",
          background:
            "linear-gradient(90deg, rgba(234,132,120,1) 0%, rgba(95,176,180,1) 100%)",
          position: "fixed",
          top: "64px",
          width: "100%",
        }}
      />
      <Box
        sx={{
          flex: 1,
          overflowY: "scroll",
          maxWidth: 1440,
          width: "100%",
          alignSelf: "center",
        }}
      >
        <LandingBanner />
        <LandingFarmInfo />
      </Box>
    </Box>
  );
}
