import React from 'react'
import styled from 'styled-components/macro'

export default function Tag({text}) {
return <TagStyled>{text}</TagStyled>
}

const TagStyled = styled.div`
padding: 3px 7px;
display: inline-block;
border: 2px solid #6D7278;
border-radius: 10px;
margin: 7px;
`

