import './App.css';
import SectionBox from './components/SectionBox';

function App() {
  const nyxRepoUrl = "https://github.com/ppiod/nyx";

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Piod's RetroFolio</h1>
      </header>

      <main>
        <SectionBox title="Hello!">
          <img 
            src="/urahara.jpg"
            alt="Piod - Profile Picture" 
            className="profile-image" 
          />
          <p>Welcome to my digital space!</p>
        </SectionBox>

        <SectionBox title="About Me">
          <p>Programming enthusiast and explorer of new technologies.</p>
          <p>Back-end Developer focused on performance, APIs, and distributed systems.</p>
        </SectionBox>

        <SectionBox title="Technologies">
          <p>These are some of the tools and languages I work and study with:</p>
          <ul>
            <li>Docker: Orchestration and consistent environments.</li>
            <li>Elixir: Functional, concurrent, and robust.</li>
            <li>JavaScript: The language of the web.</li>
            <li>TypeScript: JavaScript with typing superpowers.</li>
            <li>C++: Performance and low-level control.</li>
          </ul>
        </SectionBox>

        <SectionBox title="Projects">
          <ul>
            <li>
              <a href={nyxRepoUrl} target="_blank" rel="noopener noreferrer">Nyx</a>: Nyx is a lightweight, dynamically-typed scripting language designed for simplicity and ease of use.
            </li>
          </ul>
        </SectionBox>

        <SectionBox title="Contact">
          <p>Let's talk! Find me at:</p>
          <p>GitHub: github.com/ppiod</p>
          <p>Discord: ppiod</p>
        </SectionBox>
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Piod.</p>
      </footer>
    </div>
  );
}

export default App;