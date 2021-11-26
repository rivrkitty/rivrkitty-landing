import React from "react";
import { getSingleAssetSrc } from "../../utils/getSingleAssetSrc";
import { makeStyles } from "@mui/styles";
import "@fontsource/roboto-mono";
import { useMediaQuery } from "react-responsive";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { defaultContentPadding } from "../../utils/theme";
import FLOATINGKITTY from "../../assets/token/FLOATINGKITTY.png";
import Box from "@mui/system/Box";

const useStyles = makeStyles((theme) => ({
  bannerText: {
    verticalAlign: "Top",
    color: "#cccccc",
  },
  mobileBannerText: {
    textAlign: "center",
    margin: "0 auto",
    fontSize: "36px",
    lineHeight: "47px",
    color: "#fff",
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
  },
  mobileRootCss: {
    backgroundPositionX: "right",
  },
  bannerWrapper: {
    height: "800px",
    justifyContent: "center",
    display: "flex",
    maxWidth: "612px",
    flexDirection: "column",
  },
  floatingRkittyAnim: {
    height: "800px",
    display: "flex",
    width: "40%",
    marginLeft: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    animationName: "floating",
    animationDuration: "3s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  },
  moonRiverText: {
    color: "#EEAB47",
  },
  mobileBannerWrapper: {
    padding: "0 5%",
    textAlign: "center",
    margin: "0 auto",
    justifyContent: "end",
  },
}));

export default function LandingBanner() {
  const classes = useStyles();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 899 });

  return (
    <div
      className={`${isTabletOrMobile && classes.mobileRootCss} ${
        classes.desktopRootCss
      }`}
    >
      <Box
        className={`${isTabletOrMobile && classes.mobileBannerWrapper} ${
          classes.bannerWrapper
        }`}
        sx={{ ...defaultContentPadding }}
      >
        <Typography
          variant="h1"
          className={`${isTabletOrMobile && classes.mobileBannerText} ${
            classes.bannerText
          }`}
        >
          An Emerging Play&#8209;to&#8209;Earn KittyVerse Blending DeFi & NFTs
        </Typography>
        <Box
          sx={{
            paddingTop: { xs: 1 },
            paddingBottom: { xs: 1 },
            wordBreak: "break-word",
            color: "#EEAB47",
          }}
        >
          Moonriver Contract: 0xC2b0435276139731d82Ae2Fa8928c9b9De0761c1
        </Box>
        <div>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              marginRight: 2,
              width: { xs: "100%", md: "inherit" },
            }}
          >
            $BUY
          </Button>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              marginRight: 2,
              background: "#9969A6",
              width: {
                xs: "100%",
                md: "inherit",
              },
            }}
          >
            CHART
          </Button>
        </div>
      </Box>
      <Box className={classes.floatingRkittyAnim}>
        <img
          style={{
            height: "340px",
          }}
          src={FLOATINGKITTY}
          alt="Floating RivrKitty"
        />
      </Box>
    </div>
  );
}
