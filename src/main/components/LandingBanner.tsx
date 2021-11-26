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
import FarmCount from "./FarmCount";

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
    backgroundImage: `linear-gradient(180deg, rgba(18, 26, 40, 0) 56.33%, #121A28 100.69%), url(${
      getSingleAssetSrc("LANDINGIMAGE").default
    })`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    display: "flex",
    minHeight: "900px",
  },
  mobileRootCss: {
    backgroundImage: `linear-gradient(180deg, rgba(18, 26, 40, 0) -11.67%, #121A28 72.69%), url(${
      getSingleAssetSrc("LANDINGIMAGE").default
    })`,
    backgroundPositionX: "right",
    flexDirection: "column-reverse",
  },
  bannerWrapper: {
    justifyContent: "center",
    display: "flex",
    maxWidth: "612px",
    flexDirection: "column",
  },
  mobileBannerWrapper: {
    padding: "0 5%",
    textAlign: "center",
    margin: "0 auto",
    justifyContent: "end",
  },
  floatingRkittyAnim: {
    display: "flex",
    margin: "0 auto",
    marginTop: "300px",
    justifyContent: "flex-start",
    animationName: "floating",
    animationDuration: "3s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  },
}));

export default function LandingBanner() {
  const classes = useStyles();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 899 });

  return (
    <>
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
                paddingLeft: {
                  xs: 7,
                  md: "inherit",
                },
                paddingRight: {
                  xs: 7,
                  md: "inherit",
                },
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
                paddingLeft: {
                  xs: 7,
                  md: "inherit",
                },
                paddingRight: {
                  xs: 7,
                  md: "inherit",
                },
              }}
            >
              CHART
            </Button>
          </div>
        </Box>
        <Box
          className={classes.floatingRkittyAnim}
          sx={{
            alignItems: {
              md: "start",
              xs: "end",
            },
            width: {
              md: "40%",
            },
          }}
        >
          <img
            style={{
              height: "340px",
            }}
            src={FLOATINGKITTY}
            alt="Floating RivrKitty"
          />
        </Box>
      </div>
      <FarmCount />
    </>
  );
}
