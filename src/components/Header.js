import React from "react"
import styled from "styled-components"
import { theme } from "../common/tokens"

const Title = styled.h1`
  padding: 64px 0;
`

const DotStyle = styled.span`
  color: ${theme.day.primary.main};
`

const Header = () => {
  return (
    <Title>
      Chris Roy <br />
      <h2>
        <DotStyle>dot</DotStyle> Design
      </h2>
    </Title>
  )
}

export default Header
