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
            random fish from one of many origins (such as The Legend of Zelda,
            Stardew Valley, or the real world). You can also get a list of all
            fish in the database with their details.
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
            above lets you send a request to fishinapi.ca/api/v1/fish/gofishin.
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
            fishinapi.ca/api/v1/fish to use this route.
          </p>
        </section>
        <div
          className={`divider-line ${
            theme === "night" ? "night-divider-line" : ""
          }`}
        ></div>
        <section className="overview-container">
          <h1>Get Fish By ID</h1>
          <p>
            If you want to pull the info for a single fish in the database send
            a GET request to fishinapi.ca/api/v1/fish/searchfish/id with the id
            of the fish in question in place of id.
          </p>
        </section>
        <div
          className={`divider-line ${
            theme === "night" ? "night-divider-line" : ""
          }`}
        ></div>
        <section className="overview-container">
          <h1>Future Plans</h1>
          <p>
            This Api has been a lot of fun to work on and I intend to keep
            working on it over time. Some plans I have for it are to add the
            ability to search fish by name, add more fish to the database, add
            ways to limit the "Get All Fish" request such as pages or get based
            on origin or location. I have considered adding times of day when
            fish are available or lures that are effective for certain fish. I
            would like to add more than just day and night mode on the frontend,
            maybe sunset, blood moon, or eclipse?
            <br />
            <br />
            There are plenty more ideas I have for this project, but for now I
            hope anyone who uses it has fun and catches a few big ones!
          </p>
        </section>
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
            The frontend is built with React.js, TypeScript, and Sass and is
            served by the backend. Thanks for checking it out and have a Nice
            Day!
          </p>
        </section>
      </div>
    </>
  );
}
