import Fade from "@mui/material/Fade";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function EntryAnimation(props: { children: React.ReactNode }) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const childElement = React.Children.only<React.ReactNode>(props.children);

  const clonedElement = React.cloneElement(childElement as any, {
    ref,
  });

  return (
    <Fade in={inView} timeout={600}>
      {clonedElement}
    </Fade>
  );
}
