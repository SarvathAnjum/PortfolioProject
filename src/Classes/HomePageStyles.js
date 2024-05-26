import { makeStyles } from "@mui/styles";
import bg5 from "../Assets/bg5.jpg";
import { fontWeight } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  "@keyframes example": {
    "0%": { backgroundColor: "#D4EFDF" },
    "25%": { backgroundColor: "#ABB2B9  " },
    "50%": { backgroundColor: "#A9DFBF " },
    "75%": { backgroundColor: "#A9CCE3" },
    "100%": { backgroundColor: " #D7BDE2 " },
  },
  homePageContainer: {
    width: "100vw",
    height: "100vh",
    color: "black",
    backgroundImage: `url(${bg5})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  homePageContent: {
    background: "#81a9c6",
    width: "40%",
    color: "black",
    alignSelf: "center !important",
    margin: "auto !important",
    opacity: "0.7",
    // animationName: "$example",
    // animationDuration: "4s",
    // animationIterationCount: "100",
    borderRadius: "1.5rem",
    "&:hover": {
      transform: " scale(1.1)",
    },
  },
  homePageTexts: {
    fontFamily: "Cursive !important",
  },
}));

export default useStyles;
