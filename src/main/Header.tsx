import React, { useState } from "react";
import MediaQuery from "react-responsive";
import makeStyles from "@mui/styles/makeStyles";
import Link from "@mui/material/Link";
import Box, { BoxProps } from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import logo from "../assets/logo.png";
import RKITTY from "../assets/RKITTY.svg";
import WALLET from "../assets/token/WALLET.png";
import FancyButton from "../common/components/FancyButton";
import { useTranslation } from "react-i18next";
import MoreMenu from "../common/components/HeaderComponents/MoreMenu";
import MobileMenu from "../common/components/HeaderComponents/MobileMenu";
import { defaultContentPadding } from "../utils/theme";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    zIndex: 100,
  },
  link: {
    marginLeft: 8,
    marginRight: 8,
    color: "white",
  },
  logo: {
    height: 30,
    marginRight: 16,
  },
  walletIcon: {
    verticalAlign: "middle",
  },
});

export default function Header(props: BoxProps) {
  const { sx, ...other } = props;

  const classes = useStyles();
  const { t } = useTranslation();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Box
      sx={{
        ...defaultContentPadding,
        display: "flex",
        flexDirection: "row",
        flexFlow: "row wrap",
        alignItems: "center",
        minHeight: 64,
        zIndex: "1000",
        ...sx,
      }}
      {...other}
    >
      <Link href={"https://rivrkitty.com"}>
        <img className={classes.logo} src={RKITTY} alt="RivrKitty" />
        <img className={classes.logo} src={logo} alt="RivrKitty" />
      </Link>
      <MediaQuery maxWidth={1023}>
        <div
          style={{
            marginLeft: "auto",
          }}
        >
          <Link href={"#"}>
            <img className={classes.walletIcon} src={WALLET} alt="Wallet" />
          </Link>
          <MobileMenu
            isOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <Divider />
        <Box flex={1} />
        <Link target="_blank" href={"https://app.rivrkitty.com"}>
          <FancyButton>{t("launchApp")}</FancyButton>
        </Link>
        <MoreMenu />
      </MediaQuery>
    </Box>
  );
}
