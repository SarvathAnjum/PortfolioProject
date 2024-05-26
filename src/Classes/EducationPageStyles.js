import { makeStyles } from "@mui/styles";
import { color, margin } from "@mui/system";
const EducationPageStyles = makeStyles((theme) => ({
  educationPageContainer: {
    padding: "1rem",
    width: "70%",
    color: "black",
    margin: "3rem 2rem 1rem auto",
  },
  educationPageCardsContainer: {
    marginTop: "1rem",
    display: "flex",
    flexWrap: "wrap",
    gap: "2% !important",
  },
  educationPageCards: {
    width: "49%",
    backgroundColor: "white !important",
    border: "1px solid #e8ebeb !important",
    borderRadius: "0.5rem !important",
    paddingTop: "1%",
    boxShadow: "0px 0px 5px 2px #E0E0F2",
    marginTop: "1.4% !important",
    padding: "1rem",
    "&:hover": {
      backgroundColor: "#EAEDED !important",
      transform: "scale(0.9)",
    },
  },
  courseStyle: {
    color: "#1D1D11",
    fontSize: "1.25rem !important",
    fontWeight: "600 !important",
  },
  labelStyle: {
    color: "#1D1D11",
    fontSize: "1rem !important",
    fontWeight: "600 !important",
  },
  valuesStyle: {
    color: "#1D1D11",
    fontSize: "1rem !important",
  },
  educationLabel: {
    fontFamily: "Cursive !important",
    fontSize: "2.5rem !important",
    textAlign: "center !important",
    width: "fit-content",
    alignSelf: "center",
    borderRadius: "1rem",
    padding: "0.6rem 2rem 0.6rem 2rem",
    background: "white",
    margin: "1rem !important"
  },
  divider: {
    height: "0.6rem !important",
    borderRadius: "0.5rem !important",
    width: "65% !important",
    color: "#00926C",
    marginTop: "0.6rem",
    marginLeft: "0.5rem",
  },
}));

export default EducationPageStyles;
