import '../styles/App.scss';
import { useState } from 'react';

function App() {
  let word = 'patata';
  const [chart, setChart] = useState('');

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    for (const letter of wordLetters) {
      console.log(letter);
    }
    return wordLetters.map((letter, index) => {
      return <li key={index} className="letter"></li>;
    });
  };
  const lastLetter = (ev) => {
    setChart(ev.currentTarget.value);
  };
  //  const correctLetters = [];
  // for (let i = 0; i < correctWord.length ; i++) {

  //   console.log(correctWord.charAt(i));
  // correctLetters.push(correctWord.charAt(i));
  // console.log(correctLetters);

  // }

  const [counter, setCounter] = useState(0);
  const numberOfErrors = (ev) => {
    ev.preventDefault();
    if (ev.keyCode === 8) {
      setCounter(counter);
      console.log(counter);
    } else if (ev.keyCode === '^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$') {
      setCounter(counter + 1);
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
              <ul className="letters">
                {renderSolutionLetters()}
                {/* <li className="letter">p</li>
                <li className="letter">a</li>
                <li className="letter"></li>
                <li className="letter">a</li>
                <li className="letter"></li>
                <li className="letter">a</li> */}
              </ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
                <li className="letter"></li>
                <li className="letter"></li>
                <li className="letter"></li>
                <li className="letter"></li>
                <li className="letter"></li>
              </ul>
            </div>
            <form className="form">
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                value={chart}
                onKeyUp={numberOfErrors}
                onChange={lastLetter}
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
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
