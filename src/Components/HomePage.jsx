import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import HomePageStyles from "../Classes/HomePageStyles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function HomePage() {
  const classes = HomePageStyles();
  return (
    <Stack className={classes.homePageContainer} >
      <Stack className={classes.homePageContent} spacing="1.5rem">
        <Typography variant="h2" className={classes.homePageTexts}>Hey there,</Typography>
        <Typography variant="h3" className={classes.homePageTexts}>I am Sarvath Anjum</Typography>
        <Typography variant="h4" className={classes.homePageTexts} >Welcome to my portfolio!</Typography>
        <Divider />
        <Stack direction="row" spacing="1rem" alignSelf="center">
          <a href="https://github.com/SarvathAnjum" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ cursor: "pointer", color: "black" }} />
          </a>
          <a href="https://www.linkedin.com/in/sarvath-anjum-506898227" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ cursor: "pointer", color: "black" }} />
          </a>
          <a href="mailto:sarvath0412@gmail.com">
            <MailOutlineIcon style={{ cursor: "pointer", color: "black" }} />
          </a>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default HomePage;
