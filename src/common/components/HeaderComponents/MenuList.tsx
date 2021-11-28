import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import { useTranslation } from "react-i18next";
import makeStyles from "@mui/styles/makeStyles";
import { getSingleAssetSrc } from "../../../utils/getSingleAssetSrc";
import { CONTACT_ITEMS } from "../../utils";

const useStyles = makeStyles((theme) => ({
  container: {
    "&:hover": {
      borderRadius: "10px",
    },
  },
}));

export default function MenuList(props: { isMobile: boolean }) {
  const { t } = useTranslation();
  const { isMobile } = props;
  const classes = useStyles();

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {CONTACT_ITEMS.map((eachData) => (
        <ListItem sx={{ pt: 0, pb: 0 }}>
          <ListItemButton
            component="a"
            target="_blank"
            href={eachData.redirectTo}
            className={classes.container}
          >
            <ListItemText
              primary={t(eachData.primaryText)}
              secondary={!isMobile && t(eachData.secondaryText)}
              style={
                isMobile
                  ? {
                      flex: "0 1 auto",
                      minWidth: "82px",
                    }
                  : {}
              }
            />
            {eachData.icon && (
              <Avatar
                alt="socialmediaImg"
                src={getSingleAssetSrc(eachData.icon).default}
                style={{
                  width: isMobile ? "20px" : "35px",
                  height: isMobile ? "20px" : "35px",
                  marginRight: "8px",
                  marginLeft: "8px",
                }}
              />
            )}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
