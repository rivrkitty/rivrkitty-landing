import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
  subTitle2: {
    color: "#E78579",
  },
}));
export default function FarmCount() {
  const classes = useStyles();
  const rkittyTVL = 10000000;
  const stackingTVL = 10000000;

  return (
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
        <CountUp
          start={0}
          end={rkittyTVL}
          duration={3}
          separator=","
          decimals={2}
          prefix={"$"}
        />
      </Typography>
      <Typography variant="body1" className={classes.subTitle2}>
        TOTAL VALUE LOCKED $RKITTY (TVL)
      </Typography>
      <Typography
        variant="h1"
        sx={{ pt: 2, fontSize: { xs: "36px", md: "50px" } }}
      >
        <CountUp
          start={0}
          end={stackingTVL}
          duration={3}
          separator=","
          decimals={2}
          prefix={"$"}
        />
      </Typography>
      <Typography variant="body1" className={classes.subTitle2}>
        TOTAL VALUE LOCKED LP STAKING (TVL)
      </Typography>
    </Box>
  );
}
