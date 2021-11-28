import { Hidden } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import ContactList from "../../common/components/ContactList";
import ContactListMobile from "../../common/components/ContactListMobile";
import EntryAnimation from "../../common/components/EntryAnimation";
import { defaultContentPadding } from "../../utils/theme";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <EntryAnimation>
      <Grid
        container
        sx={{ ...defaultContentPadding, paddingTop: 7, paddingBottom: 7 }}
        spacing={6}
      >
        <Grid item xs={12}>
          <Typography variant="h2">{t("contact")}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            component="iframe"
            title="How to Buy RivrKitty ($RKITTY)"
            sx={{ width: "100%", height: "100%", border: 0, minHeight: 360 }}
            src="https://www.youtube.com/embed/g1KfbIcWPXc"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="subtitle1" sx={{ ml: 2 }}>
            {t("contactAddress")}
          </Typography>
          <Typography variant="body1" sx={{ ml: 2 }}>
            0xC2b0435276139731d82Ae2Fa8928c9b9De0761c1
          </Typography>
          <Hidden mdUp>
            <Typography variant="subtitle2" sx={{ mt: 6, textAlign: "center" }}>
              {t("contactMeow")}
            </Typography>
          </Hidden>
          <Hidden mdDown>
            <ContactList />
          </Hidden>
          <Hidden mdUp>
            <ContactListMobile sx={{ mt: 2 }} />
          </Hidden>
        </Grid>
      </Grid>
    </EntryAnimation>
  );
}
