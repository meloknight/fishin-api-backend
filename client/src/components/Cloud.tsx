import { useContext } from "react";
import { themeContext } from "../App";

type CloudProps = {
  cloudBottom: number;
  cloudSide: string;
  cloudSideAmount: number;
  cloudZIndex: number;
};

export default function Cloud({
  cloudBottom,
  cloudSide,
  cloudSideAmount,
  cloudZIndex,
}: CloudProps) {
  let cloudStyle;

  if (cloudSide === "left") {
    cloudStyle = {
      bottom: `calc(${cloudBottom}vh + 90px)`,
      left: `${cloudSideAmount}px`,
      zIndex: `${cloudZIndex}`,
    };
  } else {
    cloudStyle = {
      bottom: `calc(${cloudBottom}vh + 90px)`,
      right: `${cloudSideAmount}px`,
      zIndex: `${cloudZIndex}`,
    };
  }

  const theme = useContext(themeContext);
  return (
    <>
      <div style={cloudStyle} className="cloud-container">
        <div
          className={`cloud-part-1 ${theme === "night" ? "night-cloud" : ""}`}
        ></div>
        <div
          className={`cloud-part-2 ${theme === "night" ? "night-cloud" : ""}`}
        ></div>
        <div
          className={`cloud-part-3 ${theme === "night" ? "night-cloud" : ""}`}
        ></div>
        <div
          className={`cloud-part-4 ${theme === "night" ? "night-cloud" : ""}`}
        ></div>
      </div>
    </>
  );
}
