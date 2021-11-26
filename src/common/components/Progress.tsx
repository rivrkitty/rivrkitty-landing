import { Typography } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import { t } from "i18next";
import React from "react";
import { absoluteCenterVertically } from "../../utils/theme";

export default function Progress(props: { percent: number } & BoxProps) {
  const { percent, sx, ...other } = props;
  return (
    <Box
      {...other}
      sx={{
        position: "relative",
        display: "flex",
        backgroundColor: "white",
        height: 30,
        borderRadius: 15,
        overflow: "hidden",
        ...(sx || {}),
      }}
    >
      <Box sx={{ width: `${percent}%`, backgroundColor: "secondary.main" }} />
      {percent === 100 && (
        <>
          <Typography
            variant="body2"
            sx={{
              position: "absolute",
              left: "16px",
              ...absoluteCenterVertically,
            }}
          >
            {t("progressComplete")}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              position: "absolute",
              right: "16px",
              ...absoluteCenterVertically,
            }}
          >
            100%
          </Typography>
        </>
      )}
      {percent > 0 && percent < 100 && (
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            left: `calc(${percent}% + 16px)`,
            ...absoluteCenterVertically,
          }}
        >
          {t("progressLoading")}
        </Typography>
      )}
      {percent === 0 && (
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            left: "16px",
            ...absoluteCenterVertically,
          }}
        >
          0%
        </Typography>
      )}
    </Box>
  );
}
