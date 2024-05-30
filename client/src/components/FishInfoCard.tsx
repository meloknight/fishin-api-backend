import { useContext } from "react";
import { themeContext } from "../App";

import { GiFishingHook, GiCirclingFish } from "react-icons/gi";

type FishInfoCardProps = {
  fishCardDown: string;
  setFishCardDown: React.Dispatch<React.SetStateAction<string>>;
  goFishinCardInfo: any;
};

export default function FishInfoCard({
  fishCardDown,
  setFishCardDown,
  goFishinCardInfo,
}: FishInfoCardProps) {
  const theme = useContext(themeContext);

  const fishWeightLbs =
    Math.floor(goFishinCardInfo.fish_weight_kgs * 2.20462 * 10) / 10;
  const fishLengthInches =
    Math.floor(goFishinCardInfo.fish_length_cms * 0.393701 * 10) / 10;

  return (
    <section
      className={`fish-info-card ${
        fishCardDown === "initial"
          ? ""
          : fishCardDown === "down"
          ? "fish-info-card-away"
          : "fish-info-card-animation"
      } ${theme === "night" ? "night-fish-info-card" : ""}`}
    >
      {/* <section className="fish-info-card fish-info-card-away"> */}
      <h4 className={`nice-catch`}>Nice Catch!</h4>
      <button
        onClick={() => setFishCardDown("down")}
        className={`info-card-close-button ${
          theme === "night" ? "night-info-card-close-button" : ""
        }`}
      >
        X
      </button>
      <div className="info-card-section">
        <GiFishingHook className="fishing-icon" />
        <h1 className="info-card-fish-name">{goFishinCardInfo.fish_name}</h1>
        <GiCirclingFish className="fishing-icon" />
      </div>
      <div
        className={`info-card-divider-line ${
          theme === "night" ? "night-info-card-divider-line" : ""
        }`}
      ></div>
      <div
        className={`info-card-section ${
          theme === "night" ? "night-info-card-section" : ""
        }`}
      >
        <p>Weight:</p>
        <p>
          {goFishinCardInfo.fish_weight_kgs}kg / {fishWeightLbs}lbs
        </p>
      </div>
      <div
        className={`info-card-divider-line ${
          theme === "night" ? "night-info-card-divider-line" : ""
        }`}
      ></div>
      <div
        className={`info-card-section ${
          theme === "night" ? "night-info-card-section" : ""
        }`}
      >
        <p>Length:</p>
        <p>
          {goFishinCardInfo.fish_length_cms}cm / {fishLengthInches}in
        </p>
      </div>
      <div
        className={`info-card-divider-line ${
          theme === "night" ? "night-info-card-divider-line" : ""
        }`}
      ></div>
      <div
        className={`info-card-section ${
          theme === "night" ? "night-info-card-section" : ""
        }`}
      >
        <p>Location:</p>
        <p className="location-fish-info-card">
          {goFishinCardInfo.fish_location}
        </p>
      </div>
      <div
        className={`info-card-divider-line ${
          theme === "night" ? "night-info-card-divider-line" : ""
        }`}
      ></div>
      <div
        className={`info-card-section ${
          theme === "night" ? "night-info-card-section" : ""
        }`}
      >
        <p>Origin:</p>
        <p className="origin-fish-info-card">{goFishinCardInfo.fish_origin}</p>
      </div>
    </section>
  );
}
