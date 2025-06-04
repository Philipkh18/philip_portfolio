import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="divider"></div>
        <h1>About Me</h1>
        <div className="divider"></div>
        <div className="about-content">
          <div className="left-side">
            <div className="img">
              <img src="src/assets/Headshot.JPG" alt="headshot" />
            </div>
          </div>
          <div className="right-side">
            <h1>HI I'M PHILIP... </h1>
            <div className="divider"></div>
            <p>
              I'm a rising junior studying Data Science and Economics at the
              University of Michigan. As of right now, I'm interested in Machine
              Learning in financial markets and I love creating websites and
              really cool apps! I love playing basketball (GO KNICKS!) and
              watching soccer (UP THE CHELS!). I am also trying to get into
              cooking more!{" "}
            </p>
            <div className="interests">
              <div className="movies">
                <p>On Rewatch:</p>
                <ul>
                  <li>The Office</li>
                  <li>Demon Slayer</li>
                  <li>Past Lives</li>
                  <li>The Dark Knight</li>
                  <li>Conclave</li>
                </ul>
              </div>
              <div className="music">
                <p>On Repeat:</p>
                <ul>
                  <li>Giveon</li>
                  <li>Leon Thomas</li>
                  <li>Clairo</li>
                  <li>Travis Scott</li>
                  <li>Jordan Ward</li>
                </ul>
              </div>
            </div>
            {/* Add more content here */}
          </div>
        </div>
      </div>
    </>
  );
}
