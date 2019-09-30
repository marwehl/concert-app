import React from 'react'
import styled from 'styled-components/macro'

export default function Tag({text}) {
return <TagStyled>{text}</TagStyled>
}

const TagStyled = styled.div`
background-color: #44D7B6;
padding: 5px 10px;
display: inline-block;
border-radius: 10px;
margin: 7px;
`

