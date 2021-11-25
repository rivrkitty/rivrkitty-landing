import React from "react";
import { getSingleAssetSrc } from "../../utils/getSingleAssetSrc";
import { makeStyles } from "@mui/styles";
import "@fontsource/roboto-mono";
import { useMediaQuery } from "react-responsive";
import Typography from "@mui/material/Typography";

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
  },
  mobileBannerText: {
    textAlign: "center",
    margin: "0 auto",
  },

  desktopRootCss: {
    backgroundImage: `linear-gradient(180deg, rgba(18, 26, 40, 0) 36.67%, #121A28 59.69%) , url(${
      getSingleAssetSrc("LANDINGIMAGE").default
    })`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "1500px",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
  },
  mobileRootCss: {
    backgroundPositionX: "right",
  },
  bannerWrapper: {
    height: "800px",
    justifyContent: "center",
    display: "flex",
    maxWidth: "612px",
    paddingLeft: "5%",
    paddingRight: "5%",
    flexDirection: "column",
  },
  moonRiverText: {
    color: "#EEAB47",
  },
}));

export default function LandingBanner() {
  const classes = useStyles();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <div
      className={`${isTabletOrMobile && classes.mobileRootCss} ${
        classes.desktopRootCss
      }`}
    >
      <div className={classes.bannerWrapper}>
        <Typography
          variant="h1"
          className={`${isTabletOrMobile && classes.mobileBannerText} ${
            classes.bannerText
          }`}
        >
          An Emerging Play&#8209;to&#8209;Earn KittyVerse Blending DeFi & NFTs
        </Typography>
        <div className={classes.moonRiverText}>
          Moonriver Contract: 0xC2b0435276139731d82Ae2Fa8928c9b9De0761c1
        </div>
      </div>
    </div>
  );
}
