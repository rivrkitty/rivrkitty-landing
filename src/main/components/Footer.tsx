import { Box } from "@mui/system";
import RKITTY from "../..//assets/RKITTY.png";
import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { defaultContentPadding } from "../../utils/theme";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: 56,
        ...defaultContentPadding,
      }}
    >
      <Box
        component="img"
        src={RKITTY}
        alt="RivrKitty"
        sx={{ height: 30, marginRight: 2 }}
      />
      <Typography variant="body2" sx={{ color: "white" }}>
        {t("footer")}
      </Typography>
    </Box>
  );
}
