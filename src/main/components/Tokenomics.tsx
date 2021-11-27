import { Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React from "react";
import { useTranslation } from "react-i18next";
import CatItem from "../../assets/catItem.png";
import TeamIcon from "../../assets/team.png";
import SafeIcon from "../../assets/safe.png";
import ShiftTeamIcon from "../../assets/shiftTeam.png";
import { defaultContentPadding } from "../../utils/theme";
import EntryAnimation from "../../common/components/EntryAnimation";
import CountUp from "react-countup";

function InfoLine(props: { title: string; subtitle: string }) {
  const { title, subtitle } = props;

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box pr={2}>
        <img src={CatItem} alt={title} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="body1" color="secondary">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

function ValueLine(props: {
  value: string;
  subtitle: string;
  animated?: boolean;
}) {
  const { value, subtitle, animated } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 1,
      }}
    >
      <Typography variant="h4">
        {animated ? (
          <CountUp
            start={0}
            end={parseInt(value)}
            duration={2}
            separator=","
            decimals={0}
          />
        ) : (
          value
        )}
      </Typography>
      <Typography variant="body1" color="secondary">
        {subtitle}
      </Typography>
    </Box>
  );
}

type ActionLink = {
  text: string;
  url: string;
};

function InfoData(props: {
  imageSrc: string;
  title: string;
  text: string;
  actionLinks: ActionLink[];
}) {
  const { actionLinks, imageSrc, text, title } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 60,
          minHeight: 60,
          backgroundColor: "#424852",
          borderRadius: "4px",
          mr: 2,
        }}
      >
        <img src={imageSrc} style={{ width: 40, height: 40 }} alt={title} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="body1" sx={{ minHeight: 72, mt: 1 }}>
          {text}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          {actionLinks.map((link, index) => (
            <Link
              href={link.url}
              color="secondary"
              key={link.text}
              sx={{
                display: "flex",
                alignItems: "center",
                ml: index === 0 ? 0 : 2,
              }}
            >
              {link.text}
              <OpenInNewIcon sx={{ ml: 1 }} />
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function Tokenomics() {
  const { t } = useTranslation();

  return (
    <EntryAnimation>
      <Grid
        container
        sx={{
          ...defaultContentPadding,
          paddingTop: 4,
          paddingBottom: 4,
        }}
        spacing={6}
      >
        <Grid item xs={12} display="flex" justifyContent="center">
          <Typography variant="h2">{t("tokenomics")}</Typography>
        </Grid>
        <Grid item container xs={12} md={6} spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {t("tokenomicsSubtitle")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <InfoLine
              title={t("tokenomicsItem1Title")}
              subtitle={t("tokenomicsItem1Subtitle")}
            />
          </Grid>
          <Grid item xs={12}>
            <InfoLine
              title={t("tokenomicsItem2Title")}
              subtitle={t("tokenomicsItem2Subtitle")}
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ValueLine
            value="1000000000000"
            subtitle={t("tokenomicsTokensCount")}
            animated
          />
          <ValueLine value="4%" subtitle={t("tokenomicsTeamTokens")} />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoData
            imageSrc={TeamIcon}
            title={t("tokenomicsCommunityTitle")}
            text={t("tokenomicsCommunityText")}
            actionLinks={[
              {
                text: t("tokenomicsJoinTelegram"),
                url: "https://t.me/rivrkitty",
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoData
            imageSrc={SafeIcon}
            title={t("tokenomicsSafeTitle")}
            text={t("tokenomicsSafeText")}
            actionLinks={[
              {
                text: t("tokenomicsAudit"),
                url: "https://github.com/rivrkitty/rivrkitty-contracts/raw/master/audits/TechRate.pdf",
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoData
            imageSrc={ShiftTeamIcon}
            title={t("tokenomicsVestingTitle")}
            text={t("tokenomicsVestingText")}
            actionLinks={[
              {
                text: t("tokenomicsLink", { number: 1 }),
                url: "https://moonriver.moonscan.io/address/0x6022cfac688d7a4bdDBccDCe8a7DEcaF253bb56F",
              },
              {
                text: t("tokenomicsLink", { number: 2 }),
                url: "https://moonriver.moonscan.io/address/0xF0876BC01A41914f26b6Fe4CdD2fD57e4CEE5A0A",
              },
              {
                text: t("tokenomicsLink", { number: 3 }),
                url: "https://moonriver.moonscan.io/address/0xe9CA83fE848D5C445f001eE0CCa2Bdb94963436F",
              },
            ]}
          />
        </Grid>
      </Grid>
    </EntryAnimation>
  );
}
