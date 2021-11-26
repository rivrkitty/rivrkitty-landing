import Fade from "@mui/material/Fade";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function EntryAnimation(props: { children: React.ReactNode }) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <Fade in={inView} timeout={600}>
      <div ref={ref}>{props.children}</div>
    </Fade>
  );
}
