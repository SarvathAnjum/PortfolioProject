import { makeStyles } from "@mui/styles";
import { color, fontSize, fontWeight, textAlign } from "@mui/system";
const AboutPageStyles = makeStyles((theme) => ({
  aboutPageContainer: {
    padding: "1rem",
    width: "70%",
    backgroundColor: "white",
    color: "black",
    margin: "5rem 2rem 1rem auto",
  },
  aboutMeLabel:{
    fontFamily: "Cursive !important",
    fontSize: "2.5rem !important",
    textAlign: "center !important",
    width: "fit-content",
    alignSelf: "center",
    borderRadius: "1rem",
    padding: "0.6rem 2rem 0.6rem 2rem",
    background: "#f4f4f4"
  },
  titleStyles:{
    fontWeight :"600 !important"
  },
  skillIconsStyle: {
    boxShadow: "0px 0px 10px 5px #E0E0F2",
  },
  contentStyles: {
    margin : "0.3rem 1rem 0rem 0rem !important",
    textAlign: "justify "
  }
}));

export default AboutPageStyles;
