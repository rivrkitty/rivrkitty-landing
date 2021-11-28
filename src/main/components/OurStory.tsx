import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import { blueGradient, defaultContentPadding } from "../../utils/theme";
import Story from "../../assets/Story.png";
import Hidden from "@mui/material/Hidden";
import EntryAnimation from "../../common/components/EntryAnimation";
import SectionBox from "../../common/components/SectionBox";

export default function OurStory() {
  const { t } = useTranslation();

  return (
    <EntryAnimation>
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          sx={{
            clipPath:
              "polygon(0% 50px, 100% 0%, 100% 100%, 0% calc(100% - 50px), 0% 50px)",
            ...blueGradient,
            marginTop: {
              xs: "180px",
              md: "0px",
            },
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SectionBox>
            <Grid
              container
              sx={{
                ...defaultContentPadding,
                paddingTop: "100px",
                paddingBottom: "140px",
              }}
              spacing={4}
            >
              <Grid
                item
                xs={12}
                md={7}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography variant="h3">{t("storyTitle")}</Typography>
                <Typography
                  variant="body1"
                  sx={{ marginTop: 2, marginBottom: 2, color: "black" }}
                >
                  {t("storyBody1")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ marginTop: 2, marginBottom: 2, color: "black" }}
                >
                  {t("storyBody2")}
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
                  {t("storyReadLitepaper")}
                </Button>
              </Grid>
              <Hidden mdDown>
                <Grid
                  item
                  md={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={Story} alt="RivrKitty Story" />
                </Grid>
              </Hidden>
            </Grid>
          </SectionBox>
        </Box>
        <Hidden mdUp>
          <img
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 0%)",
              top: "30px",
              height: "220px",
            }}
            src={Story}
            alt="RivrKitty Story"
          />
        </Hidden>
      </Box>
    </EntryAnimation>
  );
}
