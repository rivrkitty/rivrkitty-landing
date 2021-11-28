import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import Progress from "../../common/components/Progress";
import { blueGradient, defaultContentPadding } from "../../utils/theme";
import CheckIcon from "../../assets/check.png";
import EmptyCheckIcon from "../../assets/emptyCheck.png";
import EntryAnimation from "../../common/components/EntryAnimation";
import SectionBox from "../../common/components/SectionBox";

type PhaseItemType = {
  nameKey: string;
  done: boolean;
};

type PhaseType = {
  nameKey: string;
  items: PhaseItemType[];
};

const PHASES: PhaseType[] = [
  {
    nameKey: "roadmapPhase1",
    items: [
      {
        nameKey: "roadmapPhase1Item1",
        done: true,
      },
      {
        nameKey: "roadmapPhase1Item2",
        done: true,
      },
      {
        nameKey: "roadmapPhase1Item3",
        done: true,
      },
      {
        nameKey: "roadmapPhase1Item4",
        done: true,
      },
      {
        nameKey: "roadmapPhase1Item5",
        done: true,
      },
    ],
  },
  {
    nameKey: "roadmapPhase2",
    items: [
      {
        nameKey: "roadmapPhase2Item1",
        done: true,
      },
      {
        nameKey: "roadmapPhase2Item2",
        done: true,
      },
      {
        nameKey: "roadmapPhase2Item3",
        done: false,
      },
      {
        nameKey: "roadmapPhase2Item4",
        done: false,
      },
      {
        nameKey: "roadmapPhase2Item5",
        done: false,
      },
    ],
  },
  {
    nameKey: "roadmapPhase3",
    items: [
      {
        nameKey: "roadmapPhase3Item1",
        done: false,
      },
      {
        nameKey: "roadmapPhase3Item2",
        done: false,
      },
      {
        nameKey: "roadmapPhase3Item3",
        done: false,
      },
      {
        nameKey: "roadmapPhase3Item4",
        done: false,
      },
      {
        nameKey: "roadmapPhase3Item5",
        done: false,
      },
    ],
  },
  {
    nameKey: "roadmapPhase4",
    items: [
      {
        nameKey: "roadmapPhase4Item1",
        done: false,
      },
      {
        nameKey: "roadmapPhase4Item2",
        done: false,
      },
      {
        nameKey: "roadmapPhase4Item3",
        done: false,
      },
      {
        nameKey: "roadmapPhase4Item4",
        done: false,
      },
      {
        nameKey: "roadmapPhase4Item5",
        done: false,
      },
    ],
  },
];

function PhaseItem(props: { item: PhaseItemType }) {
  const { item } = props;
  const { t } = useTranslation();
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
      <Box
        component="img"
        src={item.done ? CheckIcon : EmptyCheckIcon}
        alt="Checked"
        sx={{ ml: 1, mr: 1 }}
      />
      <Typography
        variant="subtitle1"
        sx={{
          color: "info.main",
          fontFamily: "Nunito",
          fontWeight: "500",
          fontSize: "14px",
        }}
      >
        {t(item.nameKey)}
      </Typography>
    </Box>
  );
}

function Phase(props: { phase: PhaseType }) {
  const { phase } = props;

  const { t } = useTranslation();
  const doneCount = phase.items.filter((i) => i.done).length;
  const percent = (100 * doneCount) / phase.items.length;

  return (
    <Grid item xs={12} md={3} sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h4">{t(phase.nameKey)}</Typography>
      <Progress percent={percent} sx={{ marginTop: 1, marginBottom: 1 }} />
      {phase.items.map((i) => (
        <PhaseItem key={i.nameKey} item={i} />
      ))}
    </Grid>
  );
}

export default function Roadmap() {
  const { t } = useTranslation();

  return (
    <EntryAnimation>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 8,
          width: "100%",
        }}
      >
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          {t("roadmap")}
        </Typography>
        <Box
          sx={{
            ...blueGradient,
            mt: 3,
            mb: 0,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <SectionBox>
            <Grid
              container
              spacing={3}
              sx={{
                pt: 6,
                pb: 6,
                ...defaultContentPadding,
              }}
            >
              {PHASES.map((p) => (
                <Phase key={p.nameKey} phase={p} />
              ))}
            </Grid>
          </SectionBox>
        </Box>
      </Box>
    </EntryAnimation>
  );
}
