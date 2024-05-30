import { useContext } from "react";
import { themeContext } from "../App";

export default function Mountains() {
  const theme = useContext(themeContext);
  return (
    <>
      {/* distant mountains */}
      <div
        className={`mountain distant-mountain md1 ${
          theme === "night" ? "night-distant-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain distant-mountain md2 ${
          theme === "night" ? "night-distant-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain distant-mountain md3 ${
          theme === "night" ? "night-distant-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain distant-mountain md4 ${
          theme === "night" ? "night-distant-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain distant-mountain md5 ${
          theme === "night" ? "night-distant-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain distant-mountain md6 ${
          theme === "night" ? "night-distant-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain distant-mountain md7 ${
          theme === "night" ? "night-distant-mountain" : ""
        }`}
      ></div>
      {/* middle mountains */}
      <div
        className={`mountain middle-mountain mm1 ${
          theme === "night" ? "night-middle-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain middle-mountain mm2 ${
          theme === "night" ? "night-middle-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain middle-mountain mm3 ${
          theme === "night" ? "night-middle-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain middle-mountain mm4 ${
          theme === "night" ? "night-middle-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain middle-mountain mm5 ${
          theme === "night" ? "night-middle-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain middle-mountain mm6 ${
          theme === "night" ? "night-middle-mountain" : ""
        }`}
      ></div>
      {/* close mountains */}
      <div
        className={`mountain close-mountain mc0 ${
          theme === "night" ? "night-close-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain close-mountain mc1 ${
          theme === "night" ? "night-close-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain close-mountain mc2 ${
          theme === "night" ? "night-close-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain close-mountain mc3 ${
          theme === "night" ? "night-close-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain close-mountain mc4 ${
          theme === "night" ? "night-close-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain close-mountain mc5 ${
          theme === "night" ? "night-close-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain close-mountain mc6 ${
          theme === "night" ? "night-close-mountain" : ""
        }`}
      ></div>
      <div
        className={`mountain close-mountain mc7 ${
          theme === "night" ? "night-close-mountain" : ""
        }`}
      ></div>
    </>
  );
}
