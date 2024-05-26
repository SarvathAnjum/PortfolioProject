import { Avatar, Button, Dialog, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import React from "react";
import ProjectsPageStyles from "../Classes/ProjectsPageStyles";
import { CrossIcon } from "../Assets/SVGIcons";

import git from "../Assets/git.png";
import react from "../Assets/react.png";
import redux from "../Assets/redux.png";
import vscode from "../Assets/vscode.png";
import sapui5 from "../Assets/sapui5.png";
import bas from "../Assets/bas.png";
import LM1 from "../Assets/ProjectPics/LM1.png";
import LM2 from "../Assets/ProjectPics/LM2.png";
import LM3 from "../Assets/ProjectPics/LM3.png";
import LM4 from "../Assets/ProjectPics/LM4.png";
import LM5 from "../Assets/ProjectPics/LM5.png";
import LM6 from "../Assets/ProjectPics/LM6.png";
import CM1 from "../Assets/ProjectPics/CM1.png";
import CM2 from "../Assets/ProjectPics/CM2.png";
import CM3 from "../Assets/ProjectPics/CM3.png";
import CM4 from "../Assets/ProjectPics/CM4.png";
import ProjectCarousel from "./ProjectCarousel";
import RequestorPage from "../Assets/ProjectPics/RequestorPage.png";
import RequestorPage2 from "../Assets/ProjectPics/RequestorPage2.png";
import CnBPage1 from "../Assets/ProjectPics/CnBPage1.png";
import CnBPage2 from "../Assets/ProjectPics/CnBPage2.png";
import AdminPage from "../Assets/ProjectPics/AdminPage.png";
import FinalYearProjectVideo from "./FinalYearProjectVideo";
import html5 from "../Assets/html5.png";
import css from "../Assets/css.png";
import php from "../Assets/php.png";
import flask from "../Assets/flask.png";
import javascript from "../Assets/javascript.png";
import mail1 from "../Assets/ProjectPics/mail1.png";
import mail2 from "../Assets/ProjectPics/mail2.png";
import mail3 from "../Assets/ProjectPics/mail3.png";
import mail4 from "../Assets/ProjectPics/mail4.png";
import mail5 from "../Assets/ProjectPics/mail5.png";
import mail8 from "../Assets/ProjectPics/mail8.png";
import mail9 from "../Assets/ProjectPics/mail9.png";
import mail10 from "../Assets/ProjectPics/mail10.png";
import fs from "../Assets/ProjectPics/fs.png";
import fs1 from "../Assets/ProjectPics/fs1.png";
import fs2 from "../Assets/ProjectPics/fs2.png";
import fs3 from "../Assets/ProjectPics/fs3.png";
import fs4 from "../Assets/ProjectPics/fs4.png";
import fs5 from "../Assets/ProjectPics/fs5.png";
import fs6 from "../Assets/ProjectPics/fs6.png";
import fs7 from "../Assets/ProjectPics/fs7.png";
import fs8 from "../Assets/ProjectPics/fs8.png";
import publishedPaper from "../Assets/ProjectPics/publishedPaper.png";
import PDF from "../Components/PDF";
import publishedPaperPDF from "../Assets/publishedPaperPDF.pdf";

function ViewDetailsDialog({ isOpen, onClose, project }) {
  const handleButtonClick = () => {
    window.location.href = "https://www.ijert.org/a-survey-on-different-image-steganography-techniques-for-securely-transmitting-the-data-in-iot";
  };
  const projectDetails = [
    {
      name: "Incture CherryWork - Compensation Advisor",
      date: "Oct. 2023 - Present",
      techStack: [
        { name: "React", image: react },
        { name: "Redux", image: redux },
        { name: "VS Code", image: vscode },
        { name: "Git", image: git },
      ],
      description: [
        "Developed as a part of the Incture CherryWork suite, the Compensation Advisor application serves as a comprehensive tool for managing employee compensation.",
        "Utilizes cutting-edge technologies such as React, Core Redux, VS Code, and Git to ensure robustness and scalability.",
        "The application utilizes various React libraries to enhance its functionality and user experience.",
        "These include Material UI for designing intuitive user interfaces, React-Redux for managing application state, React-Virtuoso for efficiently rendering large lists, Apexcharts for visualizing data with interactive charts, React-Toastify for displaying notifications, and React-Idle-Timer for handling idle user sessions.",
        "The Compensation Advisor application is deployed on the SAP Business Technology Platform (SAP-BTP), a robust cloud-based platform that provides a comprehensive set of tools and services for developing, integrating, and operating enterprise applications.",
        "Components of the product are built using Material UI and Apexcharts for graphical representation of data.",
        "The product offers two level of approval namely, Line Manager and Compensation Manager to decide on the annaul compensation of an employee.",
        "This product enables designated managers to review and approve the annual compensation of employees, ensuring transparency and accountability in the decision-making process.",
      ],
      images: [
        {
          label: "Snapshots of Line Manager Screen",
          imgPath: LM1,
        },
        {
          label: "Snapshots of Line Manager Screen",
          imgPath: LM2,
        },
        {
          label: "Snapshots of Line Manager Screen",
          imgPath: LM3,
        },
        {
          label: "Snapshots of Line Manager Screen",
          imgPath: LM4,
        },
        {
          label: "Snapshots of Line Manager Screen",
          imgPath: LM5,
        },
        {
          label: "Snapshots of Line Manager Screen",
          imgPath: LM6,
        },
        {
          label: "Snapshots of Comp Manager Screen",
          imgPath: CM1,
        },
        {
          label: "Snapshots of Comp Manager Screen",
          imgPath: CM2,
        },
        {
          label: "Snapshots of Comp Manager Screen",
          imgPath: CM3,
        },
        {
          label: "Snapshots of Comp Manager Screen",
          imgPath: CM4,
        },
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
      description: [
        "Compensation Genie is a dynamic and robust application developed to streamline and optimize the employee compensation management process for enterprises.",
        "The project leveraged Business Application Studio (BAS) for its development environment, providing a comprehensive suite of tools for efficient coding, debugging, and deployment.",
        "BAS facilitated a smooth integration with SAP systems, ensuring that Compensation Genie could seamlessly operate within the existing SAP ecosystem.",
        "Version control and collaborative development were managed using Git, ensuring code integrity, facilitating teamwork, and enabling the tracking of changes throughout the development cycle.",
        "Streamlines the process of calculating employee bonuses, raises, and other compensation elements.",
        "Employs industry best practices for security and data privacy, ensuring the confidentiality and integrity of sensitive employee information.",
        "There were three personas namely, Requestor Person, Compensation & Benefits Persona and Admin Persona",
        "Requestor Persona:  Requests for compensation-related changes, like bonuses, promotions, or salary adjustments, are usually made by staff members or managers.submitting compensation change requests, supplying the required documentation and justifications, and keeping track of the requests' progress.forms for submitting intuitive requests,instantaneous requests status updates,alerts and notifications about updates to approval or action items.",
        "Compensation & Benefits Persona: HR specialists are in charge of examining and approving requests for compensation and making sure they adhere to organizational standards and policies.reviewing requests that have been submitted, analyzing compensation, and approving or rejecting requests in accordance with predetermined standards and financial limitations.",
        "Admin Persona: Users' access, configurations, and overall system integrity are managed by system administrators or HR IT specialists.maintaining user roles and permissions, configuring system settings, and making sure the application is current and operating properly.",
        "Users' access, configurations, and overall system integrity are managed by system administrators or HR IT specialists.maintaining user roles and permissions, configuring system settings, and making sure the application is current and operating properly.",
      ],
      images: [
        {
          label: "Requestor Persona Screens",
          imgPath: RequestorPage,
        },
        {
          label: "Requestor Persona Screens",
          imgPath: RequestorPage2,
        },
        {
          label: "C&B Persona Screens",
          imgPath: CnBPage1,
        },
        {
          label: "C&B Persona Screens",
          imgPath: CnBPage2,
        },
        {
          label: "Admin Persona Screen",
          imgPath: AdminPage,
        },
      ],
    },
    {
      name: "Final Year Project",
      date: "Oct 2022 - May 2023",
      techStack: [
        { name: "SAPUI5", image: sapui5 },
        { name: "BAS", image: bas },
        { name: "Git", image: git },
      ],
      description: [
        // "The objective of this project is to to develop a website to securely transmit the data between the sender and the receiver based on the images captured in an IOT environment by using the approach of Image Steganography",
        // "Image Steganography is the process of hiding secret information inside a cover image. The secret information is hidden in a way that it not visible to the human eyes.",
        // "This project is divided into two phases as follows :",
        // " 1) Capturing Live Images from a restricted area: This part involves making use of the following hardware and software components in order to capture the images from restricted area and to store it in a telegram app.",
        // " 2) Performing Image Steganography : Least Significant Bit (LSB) technique is used to implement image steganography which involves overwriting or substituting the bit with the lowest arithmetic value. The result of this technique very slightly alters the original input cover image. ",
        // " The hardware requirements are :- ",
        // " * ESP32-CAM - used to capture the images of the intruders in access restricted area.",
        // " * PIR Motion Sensor -  Passive infrared sensor is an electronic sensor used to detect the motion of a human body within the sensor’s range.",
        // " * BC547 NPN Transistor - It is a Bi-polar Junction Transistor used as current amplifier and for quick switching",
        // " * 220 ohm, 1k, 10k Resistor - limits or regulates the flow of electrical current in an electronic circuit.",
        // " * LED - A light-emitting diode is a semiconductor device that emits light when current flows through it.",
        // "The software requirements are : ",
        // " * Python IDLE - To run and execute the LSB algorithm program.",
        // " * Arduino IDE - Used to program the ESP32 board",
        // " * Telegram App- To store the captured image from the ESP32 camera.",
        // "With respect to this project, a research paper titled “A Survey on Different Image Steganography Techniques for Securely Transmitting the Data in IOT” was written and published in the journal “International Journal of Engineering Research and Technology (IJERT)” Volume 12 Issue 4, April - 2023",

        <ul>
          <li>
            The objective of this project is to to develop a website to securely transmit the data between the sender and the receiver based on the images captured in an IOT environment by using the
            approach of Image Steganography
          </li>
          <li>Image Steganography is the process of hiding secret information inside a cover image. The secret information is hidden in a way that it not visible to the human eyes.</li>
          <li>This project is divided into two phases as follows</li>
          <ul style={{ marginLeft: "1rem" }}>
            <li>
              Capturing Live Images from a restricted area: This part involves making use of the following hardware and software components in order to capture the images from restricted area and to
              store it in a telegram app.
            </li>
            <li>
              Performing Image Steganography : Least Significant Bit (LSB) technique is used to implement image steganography which involves overwriting or substituting the bit with the lowest
              arithmetic value. The result of this technique very slightly alters the original input cover image.{" "}
            </li>
          </ul>
          <li>The hardware requirements are :-</li>
          <ul style={{ marginLeft: "1rem" }}>
            <li>ESP32-CAM - used to capture the images of the intruders in access restricted area.</li>
            <li>PIR Motion Sensor - Passive infrared sensor is an electronic sensor used to detect the motion of a human body within the sensor’s range."</li>
            <li> BC547 NPN Transistor - It is a Bi-polar Junction Transistor used as current amplifier and for quick switching</li>
            <li> 220 ohm, 1k, 10k Resistor - limits or regulates the flow of electrical current in an electronic circuit."</li>
            <li> LED - A light-emitting diode is a semiconductor device that emits light when current flows through it.</li>
          </ul>
          <li>The software requirements are :-</li>
          <ul style={{ marginLeft: "1rem" }}>
            <li> Python IDLE - To run and execute the LSB algorithm program.",</li>
            <li>Arduino IDE - Used to program the ESP32 board",</li>
            <li>Telegram App- To store the captured image from the ESP32 camera."</li>
          </ul>
          <li>
            With respect to this project, a research paper titled “A Survey on Different Image Steganography Techniques for Securely Transmitting the Data in IOT” was written and published in the
            journal “International Journal of Engineering Research and Technology (IJERT)” Volume 12 Issue 4, April - 2023
          </li>
        </ul>,

        <Stack alignItems="center">
          <img src={publishedPaper} style={{ width: "30rem" }}></img>
          <Stack direction="row" spacing="2rem" marginTop="2rem">
            <Button variant="contained" onClick={handleButtonClick} style={{ background: "#717d7e" }}>
              View Paper in IJERT website
            </Button>
            <PDF text="Published Paper" dialogTitle="A Survey on Different Image Steganography Techniques for Securely Transmitting the Data in IOT" src={publishedPaperPDF} />
            <Button variant="contained" onClick={handleButtonClick} style={{ background: "#717d7e" }}>
              View Github Respository 
            </Button>
          </Stack>
        </Stack>,
      ],
    },
    {
      name: "Mass Mail Dispatcher",
      date: "Mar 2022 - Apr 2022",
      techStack: [
        { name: "HTML", image: html5 },
        { name: "CSS", image: css },
        { name: "Javascript", image: javascript },
        { name: "PHP", image: php },
      ],
      description: [
        <ul>
          <li>The objective of this project is to send a mail to a bulk of receivers uploaded via a CSV file and to validate valid and invalid email addresses.</li>
          <li>
            The existing methods require the installation of specific software, apps, or any third-party apps.", "But with the help of this project, the user can accomplish his/her task in a very
            efficient and quick manner.
          </li>
          <li>This project works in two steps: 1. Sending Bulk Emails 2. Validating Email Addresses.</li>
          <li>Sending Bulk Emails:</li>
          <ul style={{ marginLeft: "1rem" }}>
            <li>The first web page which will be displayed to the user is the home page of the website.</li>
            <li>
              Clicking on the 'SEND EMAIL' button, the page will be directed to a page where the user can upload a valid CSV file in a specified format. The CSV file format accepted by this website is
              : email1@domain.com
            </li>
            <li>No other format apart from the above-mentioned format will be accepted by this website.</li>
            <li>
              On successfully uploading a CSV file, the user will be directed to a page containing a Subject and Message box. These are the required contents and must be entered by the user
              compulsorily.
            </li>
            <li>Later, on clicking the 'SEND' button, the email will be sent to all the valid email addresses and a message status will appear.</li>
            <li>The sender can log on to his/her email account through which the mail was sent to confirm the status of the mail sent.</li>
          </ul>
          <li>Validating Email Addresses :</li>
          <ul style={{ marginLeft: "1rem" }}>
            <li>Clicking on the 'VALIDATE EMAIL' button, the user will be directed to an online Python compiler.</li>
            <li> On running the script successfully, a structured list of all valid and invalid email addresses will be displayed on the output console.</li>
            <li>Hence, the user can reduce his/her work of sorting out valid email addresses from invalid email addresses.</li>
          </ul>
        </ul>,
      ],
      images: [
        {
          label: "Architecture diagram",
          imgPath: mail1,
        },
        {
          label: "Home Page",
          imgPath: mail2,
        },
        {
          label: "About Page",
          imgPath: mail3,
        },
        {
          label: "Features Page",
          imgPath: mail4,
        },
        {
          label: "Upload a csv file",
          imgPath: mail5,
        },

        {
          label: "Message box to entre a message if necessary",
          imgPath: mail8,
        },
        {
          label: "status of the mail sent",
          imgPath: mail9,
        },
        {
          label: "List of valid and invalid email addresses on clicking VALIDATE EMAIL button",
          imgPath: mail10,
        },
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
    //   ],
    //   description: [

    //   ],
    //   images: [
    //     {
    //       label: "Architecture diagram",
    //       imgPath: mail1,
    //     },
    //     {
    //       label: "Home Page",
    //       imgPath: mail2,
    //     },
    //     {
    //       label: "About Page",
    //       imgPath: mail3,
    //     },
    //     {
    //       label: "Features Page",
    //       imgPath: mail4,
    //     },
    //     {
    //       label: "Upload a csv file",
    //       imgPath: mail5,
    //     },

    //     {
    //       label: "Message box to entre a message if necessary",
    //       imgPath: mail8,
    //     },
    //     {
    //       label: "status of the mail sent",
    //       imgPath: mail9,
    //     },
    //     {
    //       label: "List of valid and invalid email addresses on clicking VALIDATE EMAIL button",
    //       imgPath: mail10,
    //     },
    //   ],
    // },
    {
      name: "Airline Reservation System using Transaction Management",
      date: "Apr 2022 - Jan 2023",
      techStack: [
        { name: "HTML", image: html5 },
        { name: "CSS", image: css },
        { name: "Javascript", image: javascript },
        { name: "Flask", image: flask },
      ],
      description: [
        "The objective of this project is to implement Transaction Management Technique for an Airline Reservation System.",
        "The Transaction Management Technique is likely more to be like a General Ledger Problem which involves creating and maintain two files namely - Journal and Ledger Files and performing consequential matching and merging on these two files to retrieve specific details.",
        "This mini project is built with two login options – User and Admin.",
        " A user can book a flight ticket entering all the required details whereas the Admin has all the privileges to search, display and delete a specific booked ticket of a passenger.",
        "This mini project provides an interface for a user to book his/her flight ticket in advance and the admin can have a detailed record of all the bookings done by referring the journal and ledger files.",
        "Journal file contains all the tickets booked (records) in data entry sequenced whereas the ledger file provides a summarized information of the records which are sorted based on the Account ID.",
      ],
      images: [
        {
          label: "Architecture Diagram",
          imgPath: fs,
        },
        {
          label: "Home Page",
          imgPath: fs1,
        },
        {
          label: "User Login Page",
          imgPath: fs2,
        },
        {
          label: "User Ticket Booking Page",
          imgPath: fs3,
        },
        {
          label: "User Details Page",
          imgPath: fs4,
        },
        {
          label: "Admin Login Page",
          imgPath: fs5,
        },

        {
          label: "Display operation",
          imgPath: fs6,
        },
        {
          label: "Search operation",
          imgPath: fs7,
        },
        {
          label: "journal.txt and ledger.txt",
          imgPath: fs8,
        },
      ],
    },
  ];
  const classes = ProjectsPageStyles();

  const renderProjectDetails = (project) => {
    console.log(project);
    const selectedProject = projectDetails.find((item) => item.name === project.name);
    console.log(selectedProject);
    return (
      <>
        <Typography>Date: {project.date}</Typography>
        <Stack direction="row" spacing="0.5rem">
          <Typography>Tech Stack:</Typography>

          {project.techStack.map((tech, index) => (
            <Avatar key={index} src={tech.image} alt={tech.name} className={classes.techStackStyle} />
          ))}
        </Stack>
        <Stack alignItems="center">{project.name === "Final Year Project" ? <FinalYearProjectVideo /> : <ProjectCarousel images={selectedProject.images} />}</Stack>

        <Typography className={classes.projectDescText}>Project Description: </Typography>
        <ul>
          {selectedProject.description.map((point, index) =>
            selectedProject.name === "Final Year Project" || selectedProject.name === "Mass Mail Dispatcher" ? (
              <Typography style={{ paddingTop: "0.5rem", marginLeft: "1rem" }} key={index}>{point}</Typography>
            ) : (
              <li key={index} style={{ paddingTop: "0.5rem", marginLeft: "1rem" }}>
                {point}
              </li>
            )
          )}
        </ul>
      </>
    );
  };

  return (
    <Dialog maxWidth="md" open={isOpen} onClose={onClose}>
      <Stack direction="row" justifyContent="space-between">
        <DialogTitle className={classes.dialogTitle}>{project ? project.name : ""}</DialogTitle>
        <Button startIcon={<CrossIcon />} onClick={onClose} className={classes.closeButton} />
      </Stack>
      <DialogContent>{project ? renderProjectDetails(project) : null}</DialogContent>
    </Dialog>
  );
}
export default ViewDetailsDialog;
