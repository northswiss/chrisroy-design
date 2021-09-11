import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { color, theme } from "../common/tokens"

const StyledLink = styled.a`
  border-radius: 2px;
  color: ${theme.day.primary.dark};
  font-weight: 100;
  padding: 4px;
  text-decoration: none;

  @keyframes backgroundAnimate {
    from {
      background-color: ${color.white};
    }
    to {
      background-color: ${color.greenLight};
    }
  }
  &:hover {
    animation: backgroundAnimate 0.3s forwards;
  }
`

export default function LinkExternal({ url, title, children }) {
  return (
    <StyledLink href={url} title={title} target="blank">
      {children}
    </StyledLink>
  )
}

LinkExternal.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
