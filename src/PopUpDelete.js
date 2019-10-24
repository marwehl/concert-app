import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

PopUpDelete.propTypes = {
  onYesDeleteClick: PropTypes.func,
  onNotDeleteClick: PropTypes.func,
  concert: PropTypes.object
};


export default function PopUpDelete ({onYesDeleteClick, onNotDeleteClick, concert}) {
  return (
    <PopUpDeleteStyled concert={concert}>
      <p>Do you really want to delete this concert?</p>
      <ButtonContainerStyled>
        <ButtonStyled onClick={onNotDeleteClick}>Cancel</ButtonStyled>
        <ButtonStyled
          onClick={onYesDeleteClick}
          style={{ background: "var(--orange)" }}
        >
          Delete
        </ButtonStyled>
      </ButtonContainerStyled>
    </PopUpDeleteStyled>
  );
}

const PopUpDeleteStyled = styled.section`
  padding: 25px;
  padding-top: 15px;
  background-color: white;
  border-radius: 10px;
  font-size: 1.5em;
`;

const ButtonContainerStyled = styled.section`
display: flex;
justify-content: space-around;
`

const ButtonStyled = styled.button`
padding: 5px 10px;
border-radius: 5px;
font-size: 1.2em;
`
