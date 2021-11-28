import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { useTranslation } from "react-i18next";
import { getSingleAssetSrc } from "../../utils/getSingleAssetSrc";
import { CONTACT_ITEMS } from "../utils";

export default function ContactList() {
  const { t } = useTranslation();

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      {CONTACT_ITEMS.map((item) => (
        <ListItem key={item.primaryText} sx={{ pt: 0, pb: 0 }}>
          <ListItemButton
            component="a"
            target="_blank"
            href={item.redirectTo}
            sx={{ paddingTop: "2px", paddingBottom: "2px" }}
          >
            <ListItemAvatar>
              <Avatar
                alt={t(item.primaryText)}
                src={getSingleAssetSrc(item.icon).default}
                sx={{
                  width: 36,
                  height: 36,
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={t(item.primaryText)}
              secondary={t(item.secondaryText)}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
