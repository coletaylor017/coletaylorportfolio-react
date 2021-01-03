import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './ProjectCard';

function App() {
  const background = "polygon-bg.jpeg";
	const contactButtons = <div>
		<a href="https://www.github.com/coletaylor017" target="_blank" rel=" noopener noreferrer" className="btn btn-dark mr-1">GitHub</a>
		<a href="https://www.linkedin.com/in/coletaylor017" target="_blank" rel=" noopener noreferrer" className="btn btn-primary mr-1">LinkedIn</a>
		<a href="mailto:coletaylor017@gmail.com" target="_blank" rel=" noopener noreferrer" className="btn btn-success mr-1">Email me</a>
	</div>;

  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.8.0/devicon.min.css"></link>
      <div>
        <div className="scrollspy">
          <div data-spy="scroll" data-target="#main-nav" data-offset="50">
            <div className="jumbotron jumbotron-fluid main-jumbotron" style={{ backgroundImage: "url(" + background + ")" }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-3">
                    <img src="professionalPhoto.jpg" alt="Cole Taylor" className="img-fluid rounded-circle profile-photo mw-100" />
                  </div>
                  <div className="col-9 text-left">
                    <h1>Cole Taylor</h1>
                    <h5>Software developer and C.S. student at the University of Utah</h5>
                    {contactButtons}
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <h2>My Work</h2>
              <hr className="divider" />
              <div className="row">
                <ProjectCard
                  title="AI Notebook"
                  subtitle="Express JS, Semantic UI, Mongo DB"
                  languages={["mongodb", "node", "express", "js", "css", "bootstrap"]}
                  body={
                    <div>
                      <p>An online journal that uses the IBM Watson NLU API to let you search by people, places, and things. The server side uses Node.js with Express and the client is built with Bootstrap 4.</p>
                      <h6>Skills:</h6>
                      <ul>
                        <li>MongoDB Aggregation Pipelines</li>
                        <li>Client-side and server-side form validation</li>
                        <li>Responsive CSS 3 & Bootstrap 4</li>
                      </ul>
                    </div>
                  }
                  buttons={[
                    {
                      text: "Visit the site",
                      link: "https://ainotebook.herokuapp.com"
                    },
                    {
                      text: "Github Repo",
                      link: "http://github.com/coletaylor017/ainotebook"
                    }
                  ]}
                  imageSrc="journalsite.PNG"
                  dark
                />
                <ProjectCard
                  title="Tank Wars"
                  subtitle=""
                  languages={["csharp"]}
                  body={
                    <div>
                      <p>An online multiplayer tank game implemented in C#. The server runs as a console app and can accept multiple clients. I coded this with a partner for CS 3500 at the University of Utah.</p>
                      <h6>Skills:</h6>
                      <ul>
                        <li>MVC architecture</li>
                        <li>Multithreaded programming</li>
                        <li>Networking and serialization</li>
                        <li>Pair programming</li>
                      </ul>
                    </div>
                  }
                  buttons={[
                    {
                      text: "Github Repo",
                      link: "https://github.com/uofu-cs3500-fall20/game-taylorbarber/tree/master/TankWars"
                    }
                  ]}
                  imageSrc="tankwars.PNG"
                  dark
                />
                <ProjectCard
                  title="Minesweeper"
                  subtitle="Express JS, Semantic UI, Mongo DB"
                  languages={["csharp"]}
                  body={
                    <div>
                      <p>A minesweeper game written in C# that runs in the command line. I wrote this in two days over Christmas break 2020. It uses proper MVC so you could make a GUI if you wanted to. But then, would you ever want to when the command line version looks this cool?</p>
                      <h6>Skills:</h6>
                      <ul>
                        <li>MVC Architecture</li>
                      </ul>
                    </div>
                  }
                  buttons={[
                    {
                      text: "Download the latest release",
                      link: "https://github.com/coletaylor017/minesweeper-cli/releases/download/v1.0/minesweeper.zip"
                    },
                    {
                      text: "Github Repo",
                      link: "https://github.com/coletaylor017/minesweeper-cli"
                    }
                  ]}
                  imageSrc="minesweeper.PNG"
                  dark
                />
                <ProjectCard
                  title="Maya Wagner Art Portfolio"
                  subtitle="React with Next JS, Bootstrap 4"
                  languages={["react", "js", "bootstrap"]}
                  body={
                    <div>
                      <p>A clean, responsive portfolio site made with React for a friend. I used a headless CMS called Strapi to let her upload pieces, edit the blog, and change the about page. The blog is set up so that if she's writing a post to promote a piece, she can feature a link to buy it in a sidebar.</p>
                      <h6>Skills:</h6>
                      <ul>
                        <li>React component structuring</li>
                        <li>Routing with Next.js</li>
                        <li>Integrating a headless CMS</li>
                      </ul>
                    </div>
                  }
                  buttons={[
                    {
                      text: "Visit the site",
                      link: "https://rellios.herokuapp.com"
                    }
                  ]}
                  imageSrc="rellios.PNG"
                  dark
                />
              </div>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h5>Contact me through any of these channels:</h5>
              <div className="divider"></div>
              {contactButtons}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
