import React from "react";
import Link from "@mui/material/Link";
import { getSingleAssetSrc } from "../../utils/getSingleAssetSrc";
import { makeStyles } from "@mui/styles";
import "@fontsource/roboto-mono";
import { useMediaQuery } from "react-responsive";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { defaultContentPadding } from "../../utils/theme";
import FLOATINGKITTY from "../../assets/token/FLOATINGKITTY.png";
import COINGECKO from "../../assets/token/COINGECKO.png";
import COINMARKETCAP from "../../assets/token/COINMARKETCAP.png";
import Box from "@mui/system/Box";
import FarmCount from "./FarmCount";
import SectionBox from "../../common/components/SectionBox";

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
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  mobileRootCss: {
    backgroundImage: `linear-gradient(180deg, rgba(18, 26, 40, 0) -100.67px, #121A28 900.69px), url(${
      getSingleAssetSrc("LANDINGIMAGE").default
    })`,
    backgroundPositionX: "62%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
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
    marginTop: "190px",
    marginBottom: "90px",
    justifyContent: "flex-start",
    animationName: "floating",
    animation: "6s ease-out 0s infinite normal none running",
  },
  mobileFloatingRkitty: {
    marginBottom: "140px",
    marginTop: "150px",
  },
  textButton: {
    color: "#ffffff",
    fontWeight: "Bold",
    padding: "2px 8px",
    fontSize: "16px",
    marginRight: "6px",
    height: "38px",
  },
}));

export default function LandingBanner() {
  const classes = useStyles();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 899 });
  const ButtonSx = {
    marginTop: 2,
    marginRight: 2,
    height: "38px",
    paddingLeft: {
      xs: 7,
      md: "30px",
    },
    paddingRight: {
      xs: 7,
      md: "30px",
    },
  };

  const TextButtonsWrapper: React.FC<{}> = ({ children }) =>
    isTabletOrMobile ? <div>{children}</div> : <>{children}</>;

  return (
    <>
      <div
        className={`${isTabletOrMobile && classes.mobileRootCss} ${
          classes.desktopRootCss
        }`}
      >
        <SectionBox
          sx={
            isTabletOrMobile
              ? {
                  display: "flex",
                  flexDirection: "column-reverse",
                }
              : {
                  width: "100%",
                  display: "flex",
                  minHeight: "901px",
                }
          }
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
              An Emerging Play&#8209;to&#8209;Earn KittyVerse Blending DeFi &
              NFTs
            </Typography>
            <Box
              sx={{
                paddingTop: { xs: 1 },
                paddingBottom: { xs: 1 },
                wordBreak: "break-word",
                color: "#EEAB47",
              }}
            >
              <Link
                color="secondary"
                target="_blank"
                href={
                  "https://moonriver.moonscan.io/address/0xC2b0435276139731d82Ae2Fa8928c9b9De0761c1"
                }
              >
                Moonriver Contract: 0xC2b0435276139731d82Ae2Fa8928c9b9De0761c1
              </Link>
            </Box>
            <div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "center" },
                }}
              >
                <Button
                  variant="contained"
                  sx={{ ...ButtonSx, width: { xs: "280px", md: "90px" } }}
                  href={
                    "https://www.huckleberry.finance/#/swap?outputCurrency=0xC2b0435276139731d82Ae2Fa8928c9b9De0761c1"
                  }
                  target="_blank"
                >
                  $BUY
                </Button>
                <Button
                  variant="contained"
                  sx={{ ...ButtonSx, width: { xs: "280px", md: "90px" } }}
                  href={
                    "https://dexscreener.com/moonriver/0xfdbc58805abbc36cacd7e1af65e7646665d61f08"
                  }
                  target="_blank"
                >
                  CHART
                </Button>
              </Box>

              <TextButtonsWrapper>
                <Button
                  variant="text"
                  sx={ButtonSx}
                  href={"https://www.coingecko.com/en/coins/rivrkitty"}
                  target="_blank"
                  className={classes.textButton}
                >
                  <img
                    style={{
                      height: "34px",
                      marginRight: "8px",
                    }}
                    src={COINGECKO}
                    alt="CoinGecko"
                  />
                  CoinGecko
                </Button>
                <Button
                  variant="text"
                  sx={ButtonSx}
                  href={"https://coinmarketcap.com/currencies/rivrkitty"}
                  target="_blank"
                  className={classes.textButton}
                >
                  <img
                    style={{
                      height: "28px",
                    }}
                    src={COINMARKETCAP}
                    alt="CoinMarketcap"
                  />
                </Button>
              </TextButtonsWrapper>
            </div>
          </Box>
          <Box
            className={`${isTabletOrMobile && classes.mobileFloatingRkitty} ${
              classes.floatingRkittyAnim
            }`}
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
        </SectionBox>
      </div>
      <FarmCount />
    </>
  );
}
