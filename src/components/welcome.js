import { useState } from "react";


function Welcome() {
  const [name, setname] = useState("");

  const start = (e) => {
    console.log(name);
  };
  return (
    <>
      <div className="wcdiv">
        <img
          src="https://kaizenlab.in/wp-content/uploads/2021/05/110272407-quiz-time-neon-sign-vector-quiz-pub-design-template-neon-sign-light-banner-neon-signboard-nightly-br.jpg"
          alt="img"
        />
        <div className="wcform">
          <input
            value={name}
            className="wcinput"
            type="text"
            placeholder="Please Enter your Name..."
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <button className="wcbtn" onClick={start}>
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default Welcome;
