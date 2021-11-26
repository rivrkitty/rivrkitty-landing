import { Button, Hidden, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import React from "react";
import { useTranslation } from "react-i18next";
import { defaultContentPadding } from "../../utils/theme";
import NFT from "../../assets/NFT.gif";

function TitleText() {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h3">{t("nftTitle")}</Typography>
      <Typography variant="subtitle2" sx={{ marginTop: 3 }}>
        {t("nftSubtitle")}
      </Typography>
    </>
  );
}

function DescriptionText() {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="body1" sx={{ marginTop: 2, marginBottom: 2 }}>
        {t("nftBody")}
      </Typography>
      <Button
        variant="contained"
        sx={{
          alignSelf: {
            xs: "center",
            md: "flex-start",
          },
          marginTop: 2,
          paddingLeft: {
            xs: 7,
            md: 4,
          },
          paddingRight: {
            xs: 7,
            md: 4,
          },
        }}
      >
        {t("nftReadMore")}
      </Button>
    </>
  );
}

export default function NFTPreview() {
  return (
    <Grid
      container
      sx={{
        ...defaultContentPadding,
        paddingTop: 6,
        paddingBottom: 8,
      }}
      spacing={4}
    >
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TitleText />
          <Hidden mdDown>
            <DescriptionText />
          </Hidden>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={NFT}
            alt="NFT"
            style={{ alignSelf: "center", maxWidth: "100%" }}
          />
          <Hidden mdUp>
            <DescriptionText />
          </Hidden>
        </Box>
      </Grid>
    </Grid>
  );
}
