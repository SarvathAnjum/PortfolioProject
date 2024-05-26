import zIndex from "@mui/material/styles/zIndex";
import { makeStyles } from "@mui/styles";
import { border, color, fontFamily, fontSize, fontWeight, margin, padding, positions, width } from "@mui/system";
const AppHeaderStyles = makeStyles((theme) => ({
  AppHeaderClass: {
    padding: "0rem !important",
    position: "fixed !important",
    top: "0px !important",
    left: "0rem !important",
    width: "100%",
    height: "100%",
    backgroundColor: "#f4f4f4",
    marginTop: "0rem !important",
    color: "black",
    overflowY: "auto",
  },
  tabsPosition: {
    position: "fixed",
    width: "100%",
    zIndex: "1",
  },
  infoPageContainer: {
    color: "black !important",
    position: "fixed",
    top: "5rem !important",
    left: "0px",
    margin: "0rem 1rem 1rem 2rem",
    backgroundColor: "#f4f4f4",
    width: "24%",
    // overflowY:"auto",
  },
  tabsStyle: {
    fontWeight: "600 !important",
    color: "grey !important",
  },
  personalProfileContent: {
    fontSize: "1.1rem !important",
  },
  personalProfileText: {
    fontSize: "1.1rem !important",
    fontWeight: "600 !important",
  },
}));

export default AppHeaderStyles;
