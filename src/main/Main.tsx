import { Box } from "@mui/system";

import Header from "./Header";
import LandingBanner from "./components/LandingBanner";
import LandingFarmInfo from "./components/LandingFarmInfo";
import NFTPreview from "./components/NFTPreview";
import OurStory from "./components/OurStory";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";
import Separator from "../common/components/Separator";
import Footer from "./components/Footer";
import SectionBox from "../common/components/SectionBox";

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
      <SectionBox sx={{ position: "absolute", top: 0, width: "100%" }}>
        <Header />
      </SectionBox>
      <Separator sx={{ position: "absolute", top: "64px" }} />
      <SectionBox>
        <LandingBanner />
        <LandingFarmInfo />
        <NFTPreview />
        <OurStory />
        <Tokenomics />
        <Roadmap />
        <Contact />
      </SectionBox>
      <Separator />
      <SectionBox sx={{ width: "100%" }}>
        <Footer />
      </SectionBox>
    </Box>
  );
}
