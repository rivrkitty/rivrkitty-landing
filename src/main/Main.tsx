import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";

import Header from "./Header";
import LandingBanner from "./components/LandingBanner";
import LandingFarmInfo from "./components/LandingFarmInfo";
import NFTPreview from "./components/NFTPreview";
import OurStory from "./components/OurStory";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";

export default function Main() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#121A28",
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
        <NFTPreview />
        <OurStory />
        <Tokenomics />
        <Roadmap />
      </Box>
    </Box>
  );
}
