import { useContext } from "react";
import { themeContext } from "../App";
import { getGoFishin } from "../helpers";

type GoFishinButtonProps = {
  fishCardDown: string;
  setFishCardDown: React.Dispatch<React.SetStateAction<string>>;
  setGoFishinCardInfo: any;
};

export default function GoFishinButton({
  fishCardDown,
  setFishCardDown,
  setGoFishinCardInfo,
}: GoFishinButtonProps) {
  const theme = useContext(themeContext);

  function fishInfoButtonClick() {
    if (fishCardDown === "initial" || fishCardDown === "down") {
      getGoFishin(setGoFishinCardInfo, setFishCardDown);
      // props.setFishCardDown("up");
    } else {
      setFishCardDown("down");
    }
  }
  return (
    <>
      <button
        onClick={() => fishInfoButtonClick()}
        className={`go-fishin-button ${
          theme === "night" ? "night-go-fishin-button" : ""
        }`}
      >
        {fishCardDown === "initial" || fishCardDown === "down"
          ? "Go Fishin!"
          : "Release!"}
      </button>
    </>
  );
}
