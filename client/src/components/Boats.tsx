import { useContext } from "react";
import { themeContext } from "../App";

export default function Boats() {
  const theme = useContext(themeContext);
  return (
    <>
      <img
        className={`boats boat-1 ${theme === "night" ? "night-boats" : ""}`}
        src="./assets/boat.svg"
        alt="boat"
      />
      <img
        className={`boats boat-2 ${theme === "night" ? "night-boats" : ""}`}
        src="./assets/boat.svg"
        alt="boat"
      />
      <img
        className={`boats boat-3 ${theme === "night" ? "night-boats" : ""}`}
        src="./assets/boat.svg"
        alt="boat"
      />
      <img
        className={`boats boat-4 ${theme === "night" ? "night-boats" : ""}`}
        src="./assets/boat.svg"
        alt="boat"
      />
      <img
        className={`boats boat-5 ${theme === "night" ? "night-boats" : ""}`}
        src="./assets/boat.svg"
        alt="boat"
      />
      <img
        className={`boats boat-6 ${theme === "night" ? "night-boats" : ""}`}
        src="./assets/boat.svg"
        alt="boat"
      />
      <img
        className={`boats boat-7 ${theme === "night" ? "night-boats" : ""}`}
        src="./assets/boat.svg"
        alt="boat"
      />
      <img
        className={`boats boat-8 ${theme === "night" ? "night-boats" : ""}`}
        src="./assets/boat.svg"
        alt="boat"
      />
      <img
        className={`boats boat-9 ${theme === "night" ? "night-boats" : ""}`}
        src="./assets/boat.svg"
        alt="boat"
      />
      <img
        className={`boats boat-10 ${theme === "night" ? "night-boats" : ""}`}
        src="./assets/boat.svg"
        alt="boat"
      />
    </>
  );
}
