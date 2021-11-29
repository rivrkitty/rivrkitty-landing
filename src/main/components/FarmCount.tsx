import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import CountUp from "react-countup";
import EntryAnimation from "../../common/components/EntryAnimation";
import { useFetchTvl } from "../../common/redux/fetchTvl";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  subTitle2: {
    color: "#E78579",
  },
}));
export default function FarmCount() {
  const classes = useStyles();

  const { t } = useTranslation();
  const { fetchTvl, totalTvl } = useFetchTvl();

  React.useEffect(() => {
    fetchTvl();
  }, [fetchTvl]);

  return (
    <EntryAnimation>
      <Box
        sx={{
          textAlign: "center",
          marginTop: 6,
          paddingBottom: 7,
        }}
      >
        <Typography
          variant="h1"
          sx={{ pt: 2, fontSize: { xs: "36px", md: "50px" } }}
        >
          $PAWS Farm
        </Typography>
        <Typography
          variant="h1"
          sx={{ pt: 2, fontSize: { xs: "36px", md: "50px" } }}
        >
          {totalTvl ? (
            <CountUp
              start={0}
              end={parseInt(totalTvl || "0")}
              duration={3}
              separator=","
              decimals={2}
              prefix={"$"}
            />
          ) : (
            "-"
          )}
        </Typography>
        <Typography variant="body1" className={classes.subTitle2}>
          {t("farmCountLpStaking")}
        </Typography>
        <Typography
          variant="h1"
          sx={{ pt: 2, fontSize: { xs: "36px", md: "50px" } }}
        >
          {t("farmCountSingleStakingInfo")}
        </Typography>
        <Typography variant="body1" className={classes.subTitle2}>
          {t("farmCountSingleStaking")}
        </Typography>
      </Box>
    </EntryAnimation>
  );
}
