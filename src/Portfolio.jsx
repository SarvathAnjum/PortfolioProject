import React, { useState } from "react";
import RoutesModule from "./Components/RoutesModule";
import AppHeader from "./Components/AppHeader";
import InfoPage from "./Components/InfoPage";
import { Stack } from "@mui/material";

function Portfolio() {
  const [infoPageVisible, setInfoPageVisible] = useState("1");
  const handleInfoPageVisibility = (data) => {
    setInfoPageVisible(data);
  };
  return (
    <Stack>
      <AppHeader handleInfoPageVisibility={handleInfoPageVisibility} />
      <Stack direction="row" className="mainContainer" justifyContent="space-between">
        {infoPageVisible == 1 ? "" : <InfoPage />}
        <RoutesModule />
      </Stack>
    </Stack>
  );
}

export default Portfolio;
