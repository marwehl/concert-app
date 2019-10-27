import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Heart as EmptyHeart } from "styled-icons/fa-regular/Heart";
import { Heart as FullHeart } from "styled-icons/fa-solid/Heart";


export default function Heart ({onHeartClick, currentUser, id}) {

  Heart.propTypes = {
  onHeartClick : PropTypes.func,
  currentUser : PropTypes.object,
  id : PropTypes.string
  }

  return (
    <>
    <HeartStyled
            onClick={onHeartClick}
            active={
              currentUser.favorites && currentUser.favorites.includes(id)
            }
          ></HeartStyled>
          <FullHeartStyled
            onClick={onHeartClick}
            active={!currentUser.favorites.includes(id)}
          ></FullHeartStyled>
     </>
  )
}
const HeartStyled = styled(EmptyHeart)`
  width: 28px;
  margin-top: -10px;
  display: ${props => (props.active ? "none" : "block")};
`;

const FullHeartStyled = styled(FullHeart)`
  width: 28px;
  margin-top: -10px;
  color: var(--orange);
  display: ${props => (props.active ? "none" : "block")};
`;