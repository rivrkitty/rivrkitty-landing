import React from "react";
import { getSingleAssetSrc } from "../../../utils/getSingleAssetSrc";
import { makeStyles } from "@mui/styles";
import "@fontsource/roboto-mono";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme) => ({
  bannerText: {
    fontFamily: "Roboto Mono",
    fontStyle: "Bold",
    fontWeight: "700",
    fontSize: "50px",
    lineHeight: "66px",
    align: "Left",
    verticalAlign: "Top",
    color: "#cccccc",
    maxWidth: "612px",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  mobileBannerText: {
    textAlign: "center",
    margin: "0 auto",
  },
  desktopRootCss: {
    backgroundImage: `url(${getSingleAssetSrc("LANDINGIMAGE").default})`,
    width: "100%",
    height: "900px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  mobileRootCss: {
    backgroundPositionX: "right",
  },
}));

export default function LandingBanner() {
  const classes = useStyles();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <div
      className={`${isTabletOrMobile && classes.mobileRootCss} ${
        classes.desktopRootCss
      }`}
    >
      <div
        className={`${isTabletOrMobile && classes.mobileBannerText} ${
          classes.bannerText
        }`}
      >
        An Emerging Play&#8209;to&#8209;Earn KittyVerse Blending DeFi & NFTs
      </div>
    </div>
  );
}
