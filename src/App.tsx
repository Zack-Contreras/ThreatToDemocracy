import tddLogo from "./assets/tdd.png";
import bsLogo from "./assets/Bluesky_Logo.svg.png";

import "./App.css";

function App() {
  return (
    <div className="content-container">
      <img className="logo" alt="Threat To Democracy Logo" src={tddLogo} />
      <div className="content">
        <h1>Join the movement</h1>
        <p>
          Fascism and authoritarianism are on the rise, threatening the
          foundation of our democratic society. Now more than ever, we must come
          together to raise awareness and take action. If you want to be part of
          building this platform for change,{" "}
          <a target="_blank" href="https://discord.gg/cbwRyYBt">
            join us on Discord
          </a>
          .
        </p>
        <a
          target="_blank"
          href="https://bsky.app/profile/threat-2-democracy.bsky.social"
        >
          Follow us <img height={12} src={bsLogo} />
        </a>
      </div>
    </div>
  );
}

export default App;
