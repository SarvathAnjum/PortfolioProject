import React from "react";
import EducationPageStyles from "../Classes/EducationPageStyles";
import { Stack } from "@mui/system";
import { Avatar, Divider, LinearProgress, Tooltip, Typography } from "@mui/material";
import educationPic from "../Assets/educationPic.jpg";

function EducationPage() {
  const classes = EducationPageStyles();
  const EducationData = [
    {
      course: "Bachelor of Engineering",
      year: "2019 - 2023",
      branch: "Information Science and Engineering",
      college: "BNM Institute of Technology",
      grade: "9.22 CGPA",
      gradeVal: 92,
    },
    {
      course: "Pre-University",
      year: "2017 - 2019",
      branch: "PCMB",
      college: "National PU College, Bangalore",
      grade: "92.5%",
      gradeVal: 93,
    },
    {
      course: "School",
      year: "2006 - 2017",
      college: "Carmel Convent High School,Bangalore",
      grade: "94.88%",
      gradeVal: 95,
    },
  ];

  return (
    <Stack className={classes.educationPageContainer}>
      <Stack direction="row" spacing="1rem" alignItems="center" alignSelf="center" marginBottom="1rem">
        <img src={educationPic} style={{width: "12rem", borderRadius: "50%", border: "1px solid"}}></img>
        <Typography className={classes.educationLabel}>Education</Typography>
      </Stack>
      <Divider />
      <Stack direction="row" className={classes.educationPageCardsContainer}>
        {EducationData.map((item) => (
          <Stack className={classes.educationPageCards} spacing="1rem">
            <Stack direction="row" justifyContent="space-between">
              <Typography className={classes.courseStyle}>{item.course}</Typography>
              <Typography className={classes.courseStyle}>{item.year}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography className={classes.labelStyle}>{item.course === "Bachelor of Engineering" ? "Branch :  " : item.course === "Pre-University" ? "Domain : " : " "}</Typography>
              <Typography className={classes.valuesStyle}>{item.branch}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography className={classes.labelStyle}>{item.course === "School" ? "School :" : "College : "}</Typography>
              <Typography className={classes.valuesStyle}>{item.college}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography className={classes.labelStyle}>Grade : </Typography>
              <Tooltip title={item.grade} placement="bottom">
                <LinearProgress className={classes.divider} variant="determinate" value={item.gradeVal} color="inherit" />
              </Tooltip>
              <Typography className={classes.valuesStyle}>{item.grade}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default EducationPage;
