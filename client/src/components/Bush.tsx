import { useContext } from "react";
import { themeContext } from "../App";

type BushProps = {
  bushBottom: number;
  bushSide: string;
  bushSideAmount: number;
  bushZIndex: number;
  bushWidth: number;
  bushHeight: number;
};

export default function Bush({
  bushBottom,
  bushSide,
  bushSideAmount,
  bushZIndex,
  bushWidth,
  bushHeight,
}: BushProps) {
  let bushStyle;
  const theme = useContext(themeContext);

  if (bushSide === "left") {
    bushStyle = {
      bottom: `${bushBottom}px`,
      left: `${bushSideAmount}px`,
      zIndex: `${bushZIndex}`,
      width: `${bushWidth}px`,
      height: `${bushHeight}px`,
    };
  } else {
    bushStyle = {
      bottom: `${bushBottom}px`,
      right: `${bushSideAmount}px`,
      zIndex: `${bushZIndex}`,
      width: `${bushWidth}px`,
      height: `${bushHeight}px`,
    };
  }

  return (
    <>
      <div
        style={bushStyle}
        className={`bush ${theme === "night" ? "night-bush" : ""}`}
      ></div>
    </>
  );
}
