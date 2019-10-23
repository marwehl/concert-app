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
      <button onClick={onNotDeleteClick}>No</button>
      <button onClick={onYesDeleteClick}>Yes</button>
    </PopUpDeleteStyled>
  );
}

const PopUpDeleteStyled = styled.section`
padding: 15px;
background-color: white;
border-radius: 10px;
`
