import { Avatar, Divider, Tooltip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import AboutPageStyles from "../Classes/AboutPageStyles";
import html5 from "../Assets/html5.png";
import css from "../Assets/css.png";
import javascript from "../Assets/javascript.png";
import react from "../Assets/react.png";
import sapui5 from "../Assets/sapui5.png";
import gfg from "../Assets/gfg.png";
import hackerrank from "../Assets/hackerrank.png";
import leetcode from "../Assets/leetcode.png";
import cLanguage from "../Assets/cLanguage.png";
import cplusplus from "../Assets/cplusplus.png";
import java from "../Assets/java.png";
import mySql from "../Assets/mySql.png";
import bas from "../Assets/bas.png";
import vscode from "../Assets/vscode.png";
import python from "../Assets/python.png";
import git from "../Assets/git.png";
import redux from "../Assets/redux.png";
import aboutMePic from "../Assets/aboutMePic.jpg";

function AboutPage() {
  const classes = AboutPageStyles();

  const aboutMeData = [
    {
      title: "SKILLS",
      data: [
        {
          tooltip: "HTML5",
          src: html5,
        },
        {
          tooltip: "CSS",
          src: css,
        },
        {
          tooltip: "Javascript",
          src: javascript,
        },
        {
          tooltip: "React JS",
          src: react,
        },
        {
          tooltip: "React Redux",
          src: redux,
        },
        {
          tooltip: "SAPUI5",
          src: sapui5,
        },
      ],
    },
    {
      title: "PROGRAMMING LANGUAGES",
      data: [
        {
          tooltip: "C",
          src: cLanguage,
        },
        {
          tooltip: "C++",
          src: cplusplus,
        },
        {
          tooltip: "Python",
          src: python,
        },
        {
          tooltip: "Java",
          src: java,
        },
        {
          tooltip: "MySQL",
          src: mySql,
        },
      ],
    },
    {
      title: "DEVELOPER TOOLS",
      data: [
        {
          tooltip: "Business Application Studio",
          src: bas,
        },
        {
          tooltip: "VS Code",
          src: vscode,
        },
        {
          tooltip: "Git",
          src: git,
        },
        {
          tooltip: "Python IDLE",
          src: python,
        },
      ],
    },
  ];
  return (
    <Stack className={classes.aboutPageContainer}>
      
      <Stack direction="row" spacing="1rem" alignItems="center" alignSelf="center">
        <img src={aboutMePic} style={{width: "10rem",}}></img>
        <Typography className={classes.aboutMeLabel}>About Me</Typography>
      </Stack>
      <Divider />
      <Stack textAlign="left" spacing="1rem" margin="2rem 0rem 2rem 3rem">
        <Typography className={classes.titleStyles}>INTRO</Typography>
        <Typography className={classes.contentStyles}>
          Hi there, I am Sarvath Anjum, an Associate Software Engineer currently working at Incture Technologies as a React JS Developer. I graduated with a Bachelor of Engineering in Information
          Science and Engineering in May 2023. I am passionate about developing and styling user friendly and attractive web pages. I am always eager to learn from my experienced colleagues and
          continuously seek opportunities to expand my knowledge. Equally, I am passionate about mentoring and assisting junior developers, fostering a collaborative and supportive environment.{" "}
        </Typography>
      </Stack>
      {aboutMeData.map((item) => (
        <Stack key={item.title} textAlign="left" spacing="1rem" margin="0rem 0rem 2rem 3rem">
          <Typography className={classes.titleStyles}>{item.title}</Typography>
          <Stack direction="row" spacing="2rem" margin="0rem 0rem 3rem 3rem">
            {item.data.map((subItem) => (
              <Tooltip key={subItem.tooltip} title={subItem.tooltip}>
                <Avatar src={subItem.src} className={classes.skillIconsStyle} />
              </Tooltip>
            ))}
          </Stack>
        </Stack>
      ))}
      <Stack textAlign="left" spacing="1rem" margin="0rem 0rem 2rem 3rem">
        <Typography className={classes.titleStyles}>SOFT SKILLS</Typography>
        <ul className={classes.contentStyles}>
          <li>Communication</li>
          <li>Team Work</li>
          <li>Problem Solving</li>
          <li>Time Management</li>
          <li>Adaptability</li>
        </ul>
      </Stack>

      <Stack textAlign="left" spacing="1rem" margin="0rem 0rem 2rem 3rem">
        <Typography className={classes.titleStyles}>HOBBIES</Typography>
        <ul className={classes.contentStyles}>
          <li>Mehendi Designing</li>
          <li>Badminton</li>
          <li>Interior Designing</li>
          <li>Knitting</li>
          <li>Art and Craft</li>
        </ul>
      </Stack>

      <Stack textAlign="left" spacing="1rem" margin="0rem 0rem 2rem 3rem">
        <Typography className={classes.titleStyles}>MORE ABOUT ME</Typography>
        <ul className={classes.contentStyles}>
          <li>I am born and brought-up in Bangalore, Karnataka.</li>
          <li>I have completed my academics as well as working in Bangalore.</li>
          <li>Completing my B.E, I joined Incture Technologies as an intern and got trained on SAPUI5. I also got an oppurtunity to work on a client project using SAPUI5</li>
          <li>Post completing my internship I started learning React JS and became a part of the product team.</li>
        </ul>
      </Stack>
    </Stack>
  );
}
export default AboutPage;
