import { useSelector } from "react-redux";
import { useState } from "react";

function Quiz() {
  const [name, setname] = useState("");
  const [starter, setstarter] = useState(true);
  const [marks, setmarks] = useState(0);
  const[Qlenght,setQlenght]=useState()
  const state = useSelector((e) => e);
  setQlenght(state);

  const selected = (user, quiz) => {
    // console.log(user);
    // console.log(quiz);
    if (quiz.answer === user) {
      console.log("Right Answer");
      setmarks(marks + 1);
    } else {
      console.log("wrong");
    }
  };

  const start = (e) => {
    setstarter(false);
    console.log(name);
  };
  console.log(marks);
  return (
    <>
      {starter ? (
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
      ) : (
        <div className="App">
          <div className="welcom">
            <p> WelCome {name} ...!</p>
            <p>{marks}<small>{Qlenght}</small></p>
          </div>
          {state.map((quiz, i) => (
            <div className="quiz" key={i}>
              <p>
                Q :{i + 1} {quiz.question}
              </p>
              {quiz.options.map((user, i) => (
                <div className="user" key={i}>
                  <button
                    className="btn-2"
                    onClick={() => selected(user, quiz)}
                  >
                    {user}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      {/* <div className="App">
        {state.map((quiz, i) => (
          <div className="quiz" key={i}>
            <h1>{quiz.question}</h1>
            {quiz.options.map((user, i) => (
              <div className="user" key={i}>
                <p onClick={() => selected(user, quiz)}>{user}</p>
              </div>
            ))}
          </div>
        ))}
      </div> */}
    </>
  );
}
export default Quiz;
