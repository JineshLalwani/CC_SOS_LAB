import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import "./App.css";

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [guess, setGuess] = useState("");
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 21)); // Generating random number between 0 and 20
  const [message, setMessage] = useState("");

  const handleGuess = () => {
    const userGuess = parseInt(guess);
    if (!isNaN(userGuess)) {
      if (userGuess === randomNumber) {
        setMessage("Congratulations! You guessed it right!");
      } else if (userGuess < randomNumber) {
        setMessage("Too low! Try a higher number.");
      } else {
        setMessage("Too high! Try a lower number.");
      }
    } else {
      setMessage("Please enter a valid number.");
    }
  };

  const resetGame = () => {
    setGuess("");
    setRandomNumber(Math.floor(Math.random() * 21)); // Regenerating random number between 0 and 20
    setMessage("");
  };

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated && (
          <>
            <h3>Hello {user.name}</h3>
            <p>Guess the correct generated number between 0 and 20</p>
          </>
        )}
        {isAuthenticated ? (
          <>
            <div>
              <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Enter your guess"
              />
              <button onClick={handleGuess}>Guess</button>
            </div>
            <div>
              <p>{message}</p>
              <button onClick={resetGame}>Play Again</button>
            </div>
            <button onClick={() => logout()}>Logout</button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Login With Redirect Using SSO</button>
        )}
      </header>
    </div>
  );
}

export default App;
