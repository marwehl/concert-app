import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Tag from './Tag'


export default function FullInfo ({ genres, description }) {

   Audio.propTypes = {
     genres: PropTypes.arrayOf(PropTypes.string),
     description: PropTypes.string
   };

return (
<FullInfoStyled>
  <DescriptionStyled>{description}</DescriptionStyled>
  <TagListStyled>
    {genres.map(genre => genre && <Tag text={genre} key={genre} />)}
  </TagListStyled>
</FullInfoStyled>
)
}

const FullInfoStyled = styled.section`
  display: flex;
  flex-direction: column;
`;

const DescriptionStyled = styled.p`
  word-break: break-word;
`;

const TagListStyled = styled.section`
  align-self: center;
`;