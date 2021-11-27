import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import React from "react";
import { useInView } from "react-intersection-observer";
import { defaultContentPadding } from "../../utils/theme";

const iconSx = {
  fontSize: 80,
};

export default function IntroVideo() {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [isMuted, setIsMuted] = React.useState(true);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);

  React.useEffect(() => {
    if (inView) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [inView]);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handlePlayClick = (event: any) => {
    if (videoRef.current?.paused === true) {
      videoRef.current?.play();
      setIsPaused(false);
    } else {
      videoRef.current?.pause();
      setIsPaused(true);
    }
  };
  const handleVolumeClick = (event: any) => {
    const vid = videoRef.current;
    if (!vid) {
      return;
    }
    if (vid.muted === true) {
      vid.muted = false;
      setIsMuted(false);
    } else {
      vid.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        ...defaultContentPadding,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          ref={videoRef}
          component="video"
          sx={{ maxWidth: "100%", maxHeight: 500 }}
          muted
        >
          <source src="videos/intro.m4v" type="video/mp4" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: isHover || isPaused ? "#000000aa" : "#00000000",
            transition: "background-color 0.5s",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <IconButton
            size="large"
            sx={{
              marginRight: 1,
              opacity: isHover || isPaused ? "100%" : "0%",
              transition: "opacity 0.5s",
            }}
            onClick={handlePlayClick}
          >
            {isPaused ? (
              <PlayCircleIcon sx={iconSx} />
            ) : (
              <PauseCircleIcon sx={iconSx} />
            )}
          </IconButton>
          <IconButton
            size="large"
            sx={{
              marginLeft: 1,
              opacity: isHover || isPaused ? "100%" : "0%",
              transition: "opacity 0.5s",
            }}
            onClick={handleVolumeClick}
          >
            {isMuted ? (
              <VolumeOffIcon sx={iconSx} />
            ) : (
              <VolumeUpIcon sx={iconSx} />
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
