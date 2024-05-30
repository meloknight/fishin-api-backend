import "./app.scss";
import { useState, createContext } from "react";

import Birds from "./components/Birds";
import Clouds from "./components/Clouds";
import Mountains from "./components/Mountains";
import Bushes from "./components/Bushes";
import InfoContainer from "./components/InfoContainer";
import FishInfoCard from "./components/FishInfoCard";
import Sun from "./components/Sun";
import Boats from "./components/Boats";
import FishAndSeaweed from "./components/FishAndSeaweed";
import GoFishinButton from "./components/GoFishinButton";

export const themeContext = createContext("day");

function App() {
  // fishcarddown ["initial, down, up"]
  const [fishCardDown, setFishCardDown] = useState("initial");
  const [theme, setTheme] = useState("day");
  const [goFishinCardInfo, setGoFishinCardInfo] = useState({
    fish_name: "No fish yet",
    fish_length_cms: 0,
    fish_weight_kgs: 0,
    fish_location: "behind you",
    fish_origin: "the beginning",
  });

  return (
    <>
      <themeContext.Provider value={theme}>
        <div
          className={`top-container ${theme === "night" ? "night-sky" : ""}`}
        >
          <h1 className={`title ${theme === "night" ? "night-title" : ""}`}>
            Fishin API
          </h1>
          <Sun setTheme={setTheme} />
          <Birds />
          <Clouds />
          <Mountains />
          <Boats />
          <Bushes />
          <FishInfoCard
            fishCardDown={fishCardDown}
            setFishCardDown={setFishCardDown}
            goFishinCardInfo={goFishinCardInfo}
          />
          <GoFishinButton
            fishCardDown={fishCardDown}
            setFishCardDown={setFishCardDown}
            setGoFishinCardInfo={setGoFishinCardInfo}
          />
        </div>
        <div
          className={`next-container ${
            theme === "night" ? "night-next-container" : ""
          }`}
        >
          <InfoContainer />
          <FishAndSeaweed />
        </div>
        <div className="test-div"></div>
      </themeContext.Provider>
    </>
  );
}

export default App;
