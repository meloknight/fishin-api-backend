import { useContext } from "react";
import { themeContext } from "../App";

type SunProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export default function Sun({ setTheme }: SunProps) {
  const theme = useContext(themeContext);
  return (
    <>
      <div className="sun-container">
        <button
          onClick={() => {
            if (theme === "night") setTheme("day");
            else setTheme("night");
          }}
          className={`sun ${theme === "night" ? "moon" : ""}`}
        ></button>
        <div
          className={`${theme === "night" ? "moon-flare" : "sun-flare"}`}
        ></div>
        {theme === "night" ? <div className={`moon-circle`}></div> : ""}
      </div>
    </>
  );
}
