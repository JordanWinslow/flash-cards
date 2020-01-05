import React from "react"
import { Link } from "react-router-dom"

import styled from "@material-ui/core/styles/styled"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import GitHubIcon from "@material-ui/icons/GitHub"

import JWLogo from "../images/JWLogo.svg"

const HeaderContainer = styled(AppBar)({
  background:
    "radial-gradient(circle at 16% 83%, rgba(148, 148, 148,0.06) 0%, rgba(148, 148, 148,0.06) 50%,rgba(63, 63, 63,0.06) 50%, rgba(63, 63, 63,0.06) 100%),radial-gradient(circle at 68% 87%, rgba(66, 66, 66,0.06) 0%, rgba(66, 66, 66,0.06) 50%,rgba(105, 105, 105,0.06) 50%, rgba(105, 105, 105,0.06) 100%),radial-gradient(circle at 38% 50%, rgba(123, 123, 123,0.06) 0%, rgba(123, 123, 123,0.06) 50%,rgba(172, 172, 172,0.06) 50%, rgba(172, 172, 172,0.06) 100%),linear-gradient(90deg, hsl(18,0%,1%),hsl(18,0%,1%))"
})

const Header = () => {
  return (
    <HeaderContainer position="fixed">
      <Toolbar>
        <a
          href="https://jordanwinslow.dev"
          style={{ position: "relative", left: "-.5rem" }}
        >
          <IconButton>
            <img
              src={JWLogo}
              alt="Logo Link to Jordan Winslow's Portfolio"
              style={{ width: "3.5rem" }}
            />
          </IconButton>
        </a>
        <Typography variant="body2" component="h1">
          Flash Cards | Jordan Winslow
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
            <GitHubIcon fontSize="large" />
          </IconButton>
        </a>
      </Toolbar>
    </HeaderContainer>
  )
}

export default Header
