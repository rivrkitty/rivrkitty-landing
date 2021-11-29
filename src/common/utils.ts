export type ContactItemType = {
  primaryText: string;
  secondaryText: string;
  icon: string;
  redirectTo: string;
};

export const CONTACT_ITEMS: ContactItemType[] = [
  {
    primaryText: "menuTelegram",
    secondaryText: "menuTelegramSecondaryText",
    icon: "TELEGRAM",
    redirectTo: "https://t.me/rivrkitty",
  },
  {
    primaryText: "menuTwitter",
    secondaryText: "menuTwitterSecondaryText",
    icon: "TWITTER",
    redirectTo: "https://twitter.com/rivrkitty",
  },
  {
    primaryText: "menuMedium",
    secondaryText: "menuMediumSecondaryText",
    icon: "MEDIUM",
    redirectTo: "https://medium.com/@rivrkitty",
  },
  {
    primaryText: "menuGithub",
    secondaryText: "menuGithubSecondaryText",
    icon: "GITHUB",
    redirectTo: "https://github.com/rivrkitty",
  },
  {
    primaryText: "menuDocumentation",
    secondaryText: "menuDocumentationSecondaryText",
    icon: "DOCUMENTATION",
    redirectTo: "https://docs.rivrkitty.com",
  },
];
