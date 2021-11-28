import { Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box, { BoxProps } from "@mui/material/Box";
import React from "react";
import { useTranslation } from "react-i18next";
import { getSingleAssetSrc } from "../../utils/getSingleAssetSrc";
import { CONTACT_ITEMS } from "../utils";

export default function ContactListMobile(props: BoxProps) {
  const { sx, ...other } = props;
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        ...(sx || {}),
      }}
      {...other}
    >
      {CONTACT_ITEMS.map((item) => (
        <Link key={item.primaryText} target="_blank" href={item.redirectTo}>
          <Avatar
            alt={t(item.primaryText)}
            src={getSingleAssetSrc(item.icon).default}
            sx={{
              width: 36,
              height: 36,
              cursor: "pointer",
            }}
          />
        </Link>
      ))}
    </Box>
  );
}
