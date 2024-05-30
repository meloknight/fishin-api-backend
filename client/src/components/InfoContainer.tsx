import { useContext } from "react";
import { themeContext } from "../App";

export default function InfoContainer() {
  const theme = useContext(themeContext);
  return (
    <>
      <div
        className={`info-container ${
          theme === "night" ? "night-info-container" : ""
        }`}
      >
        <section className="overview-container">
          <h1>Overview</h1>
          <p>
            Is it true that every great game has a fishing mini-game? I'll leave
            that up to you to decide, but why not have one for web APIs? Fishin
            API lets you Go Fishin and see what you catch!
            <br />
            <br />
            Currently, the main function of this API is to let you catch a
            random fish from one of many origins (such as Majora's Mask, Stardew
            Valley, or even the real world). You can also get a list of all fish
            in the database, or search a single fish for its details.
            <br />
            <br />
            Also, click the sun for night mode if you want :)
          </p>
        </section>
        <div
          className={`divider-line ${
            theme === "night" ? "night-divider-line" : ""
          }`}
        ></div>
        <section className="overview-container">
          <h1>Go Fishin!</h1>
          <p>
            If you feel like taking a moment to kick back on the pier or in a
            boat, drop in a line and see what you catch. The Go Fishin button
            above lets you send a GET request to fishinapi.ca
            /api/v1/fish/gofishin.
            <br />
            <br />
            This route takes the request and grabs a random fish (weighted by
            rarity) and returns them with a weight and length chosen from a
            standard distribution around a chosen mean value. See if you can
            catch a big one!
          </p>
        </section>
        <div
          className={`divider-line ${
            theme === "night" ? "night-divider-line" : ""
          }`}
        ></div>
        <section className="overview-container">
          <h1>Get All Fish</h1>
          <p>
            If you want to pull a list of all of the fish in the database with
            all of their info for reference. Feel free to send a GET request to
            fishinapi.ca /api/v1/fish to use this route.
          </p>
        </section>
        {/* <div
          className={`divider-line ${
            theme === "night" ? "night-divider-line" : ""
          }`}
        ></div>
        <section className="overview-container">
          <h1>Get Specific Fish by ID</h1>
          <p>
            If you are interested in a specific fishes info then send a GET
            request to localhost:5000 /api/v1/fish/searchfish/:id.
          </p>
        </section> */}
        <div
          className={`divider-line ${
            theme === "night" ? "night-divider-line" : ""
          }`}
        ></div>
        <section className="overview-container">
          <h1>Tech Stack</h1>
          <p>
            This project's backend is built with Node.js, Express.js, and
            PostgreSQL. The database and API are hosted with Microsoft Azure.
            The frontend is built with React.js, TypeScript, and Sass. Thanks
            for checking it out and have a Nice Day!
          </p>
        </section>
      </div>
    </>
  );
}
