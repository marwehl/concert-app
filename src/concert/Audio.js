import React, { useState, useRef } from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { PlayArrow } from "styled-icons/material/PlayArrow";
import { Pause } from "styled-icons/boxicons-regular/Pause";

export default function Audio ({previewUrl}) {

   Audio.propTypes = {
     previewUrl: PropTypes.string,
   };

  const [isPlaying, setIsPlaying] = useState(false);
  const audioEl = useRef(null);

  return (
    <section>
      <AudioPlayerStyled src={previewUrl} ref={audioEl} loop></AudioPlayerStyled>
            {!isPlaying &&
            <PlayArrowStyled onClick={onPlayClick} />
            }
            {isPlaying &&
            <PauseStyled onClick={onPauseClick} />
            }
    </section>
  )

   function onPlayClick() {
     audioEl.current.play();
     setIsPlaying(!isPlaying);
   }

   function onPauseClick() {
     audioEl.current.pause();
     setIsPlaying(!isPlaying);
   }

}

const AudioPlayerStyled = styled.audio`
  width: 50px;
`;

const PlayArrowStyled = styled(PlayArrow)`
  position: absolute;
  left: 150px;
  top: 85px;
  width: 48px;
  color: var(--orange);
  background: white;
  border: 2px solid var(--orange);
  border-radius: 50%;
`;

const PauseStyled = styled(Pause)`
  position: absolute;
  left: 150px;
  top: 85px;
  width: 48px;
  color: var(--orange);
  background: white;
  border: 2px solid var(--orange);
  border-radius: 50%;
`;