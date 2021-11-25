import { Box } from "@mui/system";
import React from "react";
import { getSingleAssetSrc } from "../../utils/getSingleAssetSrc";

export default function LandingFarmInfo() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${getSingleAssetSrc("LANDINGBG").default})`,
        width: "100%",
        marginTop: "-190px", //Adjust the opacity as per figma
        height: 100,
        paddingTop: "190px",
      }}
    ></Box>
  );
}
