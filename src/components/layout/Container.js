import React from "react"
import styled from "styled-components"
import breakpoint from "../../common/breakpoints"

const Styles = styled.div`
  padding: 0 16px;

  @media only screen and ${breakpoint.device.tablet} {
      padding: 0 64px;
  }

  @media only screen and ${breakpoint.device.laptop} {
      padding: 0 64px;
  }

  @media only screen and ${breakpoint.device.desktop} {
      margin: 0 auto;
      padding: 0 128px;
  }
`

const Container = ({ children }) => {
  return <Styles>{children}</Styles>
}

export default Container
