import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <nav className="navbar">
        <h2>CI Demo App</h2>
        <span className="status">● CI Ready</span>
      </nav>

      <main className="hero">
        <div className="badge">React + CI/CD</div>

        <h1>Welcome to My Demo Project 🚀 - CI Demo Project</h1>

        <p>
          This is a simple React frontend created to test your
          Continuous Integration pipeline.
        </p>

        <div className="card">
          <h2>CI Pipeline Demo</h2>

          <div className="checks">
            <div>✅ Install Dependencies</div>
            <div>✅ Run Tests</div>
            <div>✅ Build React App</div>
            <div>⏳ Deploy Application</div>
          </div>

          <button onClick={() => setCount(count + 1)}>
            Button clicked {count} times
          </button>
        </div>
      </main>

      <footer>
        <p>Built with React • CI/CD Demo</p>
      </footer>
    </div>
  );
}

export default App;