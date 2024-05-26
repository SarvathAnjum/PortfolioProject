import { makeStyles } from "@mui/styles";
import { fontSize, fontWeight } from "@mui/system";

const ProjectsPageStyles = makeStyles((theme) => ({
  techStackStyle: {
    width: "2rem !important",
    height: "2rem !important",
  },
  projectsLabel: {
    fontFamily: "Cursive !important",
    fontSize: "2.5rem !important",
    textAlign: "center !important",
    width: "fit-content",
    alignSelf: "center",
    borderRadius: "1rem",
    padding: "0.6rem 2rem 0.6rem 2rem",
    background: "#f4f4f4"
  },
  closeButton: {
    width: "2rem",
    height: "2rem",
    marginTop: "1rem !important",
  },
  projectsPageContainer: {
    padding: "1rem",
    width: "70%",
    height: "86vh",
    backgroundColor: "white",
    color: "black",
    margin: "5rem 2rem 1rem auto",
  },
  projectCardsContainer: {
    display: "flex !important",
    flexWrap: "wrap !important",
    gap: "2%",
  },
  projectCardStyle: {
    textAlign: "left !important",
    padding: "1rem",
    border: "0.1rem solid #e6e6e6 !important",
    marginTop: "2rem !important",
    borderRadius: "0.6rem !important",
    width: "32%",
    backgroundColor: "#EAEDED !important",
    height: "12.2rem ",
    "&:hover": {
      transform: "scale(0.9)",
    },
  },
  techStackStyle: {
    width: "2rem !important",
    height: "2rem !important",
  },
  closeButton: {
    width: "2rem",
    height: "2rem",
    marginTop: "1rem !important",
  },
  viewDetailsButton: {
    backgroundColor: "#99A3A4  !important",
    width: "50%",
    alignSelf: "center",
    marginTop: "auto !important",
    color: "black !important",
  },
  finalYearProjectVideo: {
    width: "25rem",
    height: "18rem !important",
  },
  projectDescText: {
    fontWeight: "600 !important",
    fontSize: "1.2rem !important",
  },
  dialogTitle: {
    fontWeight: "600 !important",
    fontSize: "1.35rem !important",
  },
}));

export default ProjectsPageStyles;
