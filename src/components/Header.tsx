import React from "react"
import styled from "styled-components"

import materialStyled from "@material-ui/core/styles/styled"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import GitHubIcon from "@material-ui/icons/GitHub"

import JWLogo from "../images/JWLogo.svg"

const HeaderContainer = materialStyled(AppBar)({
  background:
    "radial-gradient(circle at 16% 83%, rgba(148, 148, 148,0.06) 0%, rgba(148, 148, 148,0.06) 50%,rgba(63, 63, 63,0.06) 50%, rgba(63, 63, 63,0.06) 100%),radial-gradient(circle at 68% 87%, rgba(66, 66, 66,0.06) 0%, rgba(66, 66, 66,0.06) 50%,rgba(105, 105, 105,0.06) 50%, rgba(105, 105, 105,0.06) 100%),radial-gradient(circle at 38% 50%, rgba(123, 123, 123,0.06) 0%, rgba(123, 123, 123,0.06) 50%,rgba(172, 172, 172,0.06) 50%, rgba(172, 172, 172,0.06) 100%),linear-gradient(90deg, hsl(18,0%,1%),hsl(18,0%,1%))"
})

const ToolTip: any = styled.span`
  position: absolute;
  right: ${(props: any) =>
    props.right
      ? "2rem"
      : ""}; // conditionally locate the tooltip to the right or left of the hover element
  pointer-events: none;
  opacity: 0;
  width: auto;
  background-color: var(--black);
  color: var(--white);
  text-align: center;
  border-radius: 6px;
  padding: 7px 20px;
  font-size: 1rem;
`

const DetectHover = styled.div`
  transition-duration: 0.3s;
  /*MAKE TOOLTIP VISIBLE ON HOVER*/
  span {
    transition: opacity 0.3s ease-in;
    transition-delay: 1s;
  }
  :hover {
    color: #fcb813;
    span {
      /******TOOLTIP******/
      opacity: 1;
    }
  }
`

const Header = () => {
  return (
    <HeaderContainer position="fixed">
      <Toolbar>
        <a
          href="https://jordanwinslow.dev"
          style={{ position: "relative", left: "-.5rem" }}
        >
          <IconButton>
            <DetectHover>
              <img
                src={JWLogo}
                alt="Logo Link to Jordan Winslow's Portfolio"
                style={{ width: "3.5rem" }}
              />
              <ToolTip>Check Out My Portfolio!</ToolTip>
            </DetectHover>
          </IconButton>
        </a>
        <Typography variant="body2" component="h1">
          {window.innerWidth < 600
            ? "Flash Cards"
            : "Flash Cards | Jordan Winslow"}
        </Typography>
        <a
          href="https://github.com/JordanWinslow/flash-cards"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            right: "1.5rem"
          }}
        >
          <IconButton style={{ color: "white" }}>
            <DetectHover>
              <ToolTip right>View Source Code on GitHub</ToolTip>
              <GitHubIcon fontSize="large" />
            </DetectHover>
          </IconButton>
        </a>
      </Toolbar>
    </HeaderContainer>
  )
}

export default Header
