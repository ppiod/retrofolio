import './App.css';
import SectionBox from './components/SectionBox';

function App() {
  const nyxRepoUrl = "https://github.com/ppiod/nyx";
  const githubUrl = "https://github.com/ppiod";
  const discordPlaceholderUrl = "https://discord.com/users/1377774842623033364";

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
            <li><span className="text-highlight-green">Docker</span>: Orchestration and consistent environments.</li>
            <li><span className="text-highlight-green">Elixir</span>: Functional, concurrent, and robust.</li>
            <li><span className="text-highlight-green">JavaScript</span>: The language of the web.</li>
            <li><span className="text-highlight-green">TypeScript</span>: JavaScript with typing superpowers.</li>
            <li><span className="text-highlight-green">C++</span>: Performance and low-level control.</li>
            <li><span className="text-highlight-green">Nyx</span>: My programming language designed for simplicity and ease of use.</li>
          </ul>
        </SectionBox>

        <SectionBox title="Projects">
          <ul>
            <li>
              <a href={nyxRepoUrl} target="_blank" rel="noopener noreferrer">Nyx</a>
              : Nyx is a lightweight, dynamically-typed scripting language designed for simplicity and ease of use.
            </li>
          </ul>
        </SectionBox>

        <SectionBox title="Contact">
          <p>Let's talk! Find me at:</p>
          <ul>
            <li>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>: github.com/ppiod
            </li>
            <li>
              <a href={discordPlaceholderUrl} target="_blank" rel="noopener noreferrer">Discord</a>: ppiod
            </li>
          </ul>
        </SectionBox>
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} - Piod.</p>
      </footer>
    </div>
  );
}

export default App;