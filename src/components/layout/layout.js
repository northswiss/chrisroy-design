import React from "react"
import styled from "styled-components"
import { theme } from "../../common/tokens"
import "./layout.css"

const StyledMain = styled.main`
  background-color: ${theme.day.background};
  height: 100vh;
`

function Layout({ children }) {
  return (
    <>
      <StyledMain>{children}</StyledMain>
    </>
  )
}

export default Layout
