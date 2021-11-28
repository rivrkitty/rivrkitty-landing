import React from "react";
import { Box } from "@mui/system";
import Header from "./Header";
import LandingBanner from "./components/LandingBanner";
import NFTPreview from "./components/NFTPreview";
import OurStory from "./components/OurStory";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";
import Separator from "../common/components/Separator";
import Footer from "./components/Footer";
import SectionBox from "../common/components/SectionBox";
import IntroVideo from "./components/IntroVideo";

export default function Main() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY: "scroll",
        alignItems: "center",
      }}
    >
      <SectionBox sx={{ position: "absolute", top: 0 }}>
        <Header />
      </SectionBox>
      <Separator sx={{ position: "absolute", top: "64px" }} />
      <LandingBanner />
      <IntroVideo />
      <SectionBox>
        <NFTPreview />
      </SectionBox>
      <OurStory />
      <SectionBox>
        <Tokenomics />
      </SectionBox>
      <Roadmap />
      <SectionBox>
        <Contact />
      </SectionBox>
      <Separator />
      <SectionBox>
        <Footer />
      </SectionBox>
    </Box>
  );
}
