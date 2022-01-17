import "../styles/App.scss";
import { useState } from "react";

function App() {
  let keyword = "patata";
  const [chart, setChart] = useState("");
  const [counter, setCounter] = useState(0);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);

  const renderSolutionLetters = () => {
    const wordLetters = keyword.split("");
    return wordLetters.map((letter, index) => {
      if (correctLetters.includes(letter)) {
        return (
          <li key={index} className="letter">
            {letter}
          </li>
        );
      } else {
        return <li key={index} className="letter"></li>;
      }
    });
  };

  const renderWrongLetters = () => {
    return wrongLetters.map((error, index) => {
      return (
        <li key={index} className="letter">
          {error}
        </li>
      );
    });
  };

  const numberOfErrors = (ev) => {
    ev.preventDefault();
    if (ev.keyCode === 8) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
    console.log(counter);
  };
  console.log(wrongLetters);
  console.log(correctLetters);
  const handleLastLetter = (ev) => {
    ev.preventDefault();
    let lastInput = ev.currentTarget.value;
    if (lastInput.match("^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$")) {      
      setChart(lastInput);      
      if (lastInput !== "") {
        if (keyword.includes(lastInput)) {
          setCorrectLetters([...correctLetters, lastInput]);
        } else {
          setWrongLetters([...wrongLetters, lastInput]);
          numberOfErrors(ev);
        }
      }
    }
  };

  return (
    <>
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>
              <ul className="letters">{renderSolutionLetters()}</ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">{renderWrongLetters()}</ul>
            </div>
            <form className="form">
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                value={chart}
                onChange={handleLastLetter}
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                pattern="^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$"
              />
            </form>
          </section>
          <section className={`dummy error-${counter}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
