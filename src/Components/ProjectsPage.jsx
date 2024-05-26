import { Avatar, Button, Divider, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import ProjectsPageStyles from "../Classes/ProjectsPageStyles";
import ViewDetailsDialog from "../CustomComponents/ViewDetailsDialog";
import git from "../Assets/git.png";
import react from "../Assets/react.png";
import redux from "../Assets/redux.png";
import vscode from "../Assets/vscode.png";
import sapui5 from "../Assets/sapui5.png";
import bas from "../Assets/bas.png";
import html5 from "../Assets/html5.png";
import css from "../Assets/css.png";
import php from "../Assets/php.png";
import javascript from "../Assets/javascript.png";
import flask from "../Assets/flask.png";
import python from "../Assets/python.png";
import arduino from "../Assets/arduino.jpg";
import esp32 from "../Assets/esp32.jpg";
import pir from "../Assets/pir.jpg";
import telegram from "../Assets/telegram.jpg";
import projectsPic from "../Assets/projectsPic.jpg";

function ProjectsPage() {
  const classes = ProjectsPageStyles();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewDetailsClick = (project) => {
    setIsDialogOpen(true);
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  // Sample projects data
  const projects = [
    {
      name: "Incture CherryWork - Compensation Advisor",
      date: "Oct. 2023 - Present",
      techStack: [
        { name: "React", image: react },
        { name: "Redux", image: redux },
        { name: "VS Code", image: vscode },
        { name: "Git", image: git },
      ],
    },
    {
      name: "Incture - Compensation Genie",
      date: "Apr. 2023 - Oct 2023",
      techStack: [
        { name: "SAPUI5", image: sapui5 },
        { name: "BAS", image: bas },
        { name: "Git", image: git },
      ],
    },
    {
      name: "Final Year Project",
      date: "Oct 2022 - May 2023",
      techStack: [
        { name: "Python", image: python },
        { name: "Arduino IDE", image: arduino },
        { name: "ESP32 Cam", image: esp32 },
        { name: "PIR motion detector sensor", image: pir },
        { name: "Telegram App", image: telegram },
      ],
    },
    {
      name: "Mass Mail Dispatcher",
      date: "Apr 2022 - May 2022",
      techStack: [
        { name: "HTML", image: html5 },
        { name: "CSS", image: css },
        { name: "Javascript", image: javascript },
        { name: "PHP", image: php },
        { name: "VS Code", image: vscode },
      ],
    },
    // {
    //   name: "Airline Reservation System",
    //   date: "Sept 2021 - Jan 2022",
    //   techStack: [
    //     { name: "HTML", image: html5 },
    //     { name: "CSS", image: css },
    //     { name: "Javascript", image: javascript },
    //     { name: "PHP", image: php },
    //     { name: "VS Code", image: vscode },
    //   ],
    // },
    {
      name: "Airline Reservation System using Transaction Management",
      date: "Mar 2022 - Aug 2022",
      techStack: [
        { name: "HTML", image: html5 },
        { name: "CSS", image: css },
        { name: "Javascript", image: javascript },
        { name: "Flask", image: flask },
        { name: "VS Code", image: vscode },
      ],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Stack className={classes.projectsPageContainer} spacing="0.5rem">
      <Stack direction="row" spacing="1rem" alignItems="center" alignSelf="center">
        <img src={projectsPic} style={{width: "12rem", borderRadius: "50%",border: "1px solid"}}></img>
        <Typography className={classes.projectsLabel}>PROJECTS</Typography>
      </Stack>
        <Divider />
        <Stack direction="row" className={classes.projectCardsContainer}>
          {projects.map((project, index) => (
            <Stack key={index} className={classes.projectCardStyle}>
              <Typography fontSize="1rem" fontWeight={550}>
                {project.name}
              </Typography>
              <Stack direction="row" spacing="1rem" marginTop="auto" alignSelf="center">
                {project.techStack.map((tech, index) => (
                  <Tooltip title={tech.name} key={index}>
                    <Avatar
                      src={tech.image}
                      alt={tech.name}
                      className={classes.techStackStyle}
                      sx={{
                        "&:hover": {
                          transform: "scale(1.5)", // Increase size on hover
                        },
                      }}
                    />
                  </Tooltip>
                ))}
              </Stack>
              <Button variant="contained" onClick={() => handleViewDetailsClick(project)} className={classes.viewDetailsButton}>
                View Details
              </Button>
            </Stack>
          ))}
        </Stack>
        <ViewDetailsDialog isOpen={isDialogOpen} onClose={handleCloseDialog} project={selectedProject} />
      </Stack>
    </>
  );
}

export default ProjectsPage;
