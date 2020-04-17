import React from "react";

const Guides = (props) => {
  if (props.guideRender) {
    return (
      <div className="container-fluid" id="guides-container">
        <div className="col-sm-1"></div>
        <div className="col-md-4">
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/04CzufCsJmI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-sm-1"></div>
        <div id="riven-description-parent" className="col-md-4">
          <h1> RIVEN FINAL ENCOUNTER // </h1>
          <p id="riven-description">
            Once you know which of Riven’s eyes are glowing, kill the Captain
            and move toward the back of the room. The middle player should get
            off the floor so they don’t get beaten down by Taken Psions. After a
            few seconds, Riven’ll pop her head through the curtain. Her mouth
            will open and a Taken ball of death will be sitting inside her
            mouth. Use your Whisper of the Worm or Sleeper Simulant to fire into
            her mouth to deal some damage. Don’t get greedy. After about nine
            Whisper shots or six seconds, you should stop. After you shoot
            Riven’s mouth, you’ll need to locate the eyes your teammates called
            out to you. While the eyes won’t look like they’re glowing to you,
            you’ll need to trust your team’s callouts. Coordinate with your team
            and shoot those two eyes until they pop. If you wait too long to do
            this, you’ll wipe. If you shoot the wrong eye, you’ll wipe. You must
            be perfect here, as this is the most important mechanic in this
            entire fight. Once Riven’s eyes have popped, she’ll reel back and be
            staggered. The Orb should still be sitting on the ground, and you’ll
            have time to spare before the buff expires. Choose one player to
            pick up the buff, and prepare to cleanse the lifts.
          </p>
          <p id="riven-description">
            After Riven has been defeated on both sides, have one player on each
            side pick up the Orb. Jump up onto the pillar in the back of the
            room and look through the Observatory glass into the amphitheater.
          </p>

          <p id="riven-description">
            Once everyone is in position, the Orb holder will need to look
            toward the Observatory. Here, they’ll see one of the many vault
            symbols in a line — it’s very difficult to miss. This is where the
            Observatory finally comes into play. While looking through the
            glass, you’ll see many different symbols spread out around the
            amphitheater — specifically around the steps and the center
            platform.
          </p>
          <p id="riven-description">
            Locate the symbol that the Orb player called. Once you’ve found it,
            direct the Orb holder to the called symbol. This’ll take some time,
            but you’ll eventually find a language that works for both of you,
            such as “farthest up stairs,” or “middle plate right.” As the Orb
            holder, you’ll see cylinders around the room as you get close to
            them.
          </p>
        </div>
        <div className="col-sm-2"></div>
      </div>
    );
  } else {
    return null;
  }
};

export default Guides;
