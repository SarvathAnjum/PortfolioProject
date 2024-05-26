import { Avatar, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import AppHeaderStyles from "../Classes/AppHeaderStyles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PDF from "./PDF";
import SarvathAnjum_Resume from "../Assets/SarvathAnjum_Resume.pdf";
function InfoPage() {
  const classes = AppHeaderStyles();
  return (
    <Stack className={classes.infoPageContainer}>
      <Stack gap="1.5rem">
        <Avatar sx={{ width: "12rem", height: "12rem" }} />
        <Stack>
          <Typography fontWeight={600} fontSize="1.5rem" textAlign="left">
            Sarvath Anjum
          </Typography>
        </Stack>
        <Divider />
        <Stack alignItems="start" spacing="1rem">
          <Typography className={classes.personalProfileText}>Personal Profile</Typography>
          <Typography textAlign="left" className={classes.personalProfileContent}>
            A Hardworking and an organized software engineer trying best to use my skills towards creating a technologically advanced society and giving my best towards the growth of an organization.
          </Typography>
        </Stack>
        <PDF text="Resume" dialogTitle="Sarvath Anjum Resume" src={SarvathAnjum_Resume} />
        <Divider />
        <Stack direction="row" spacing="0.5rem">
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

export default InfoPage;
