import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './ProjectCard';

function App() {
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
            <div className="jumbotron jumbotron-fluid main-jumbotron text-light">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-12 col-md-auto justify-content-center justify-content-md-right text-center text-md-right">
                    <img src="github-photo2.jpg" alt="Cole Taylor" className="img-fluid rounded-circle profile-photo mw-100 mb-4 mb-md-0" />
                  </div>
                  <div className="col-12 col-md-auto text-center text-md-left">
                    <span className="mb-3"><h3 className="d-inline-block pr-md-2"><strong>Cole Taylor</strong></h3><h5 class="d-inline-block">Software developer and C.S. student at the University of Utah</h5></span>
                    <div class="mt-3">
                      {contactButtons}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid px-0 text-center">
              <h2 className="pt-5 pb-3">My Work</h2>
              <hr className="mx-5" />
              <div className="row">
                <ProjectCard
                  title="AI Notebook"
                  subtitle="Express JS, Semantic UI, Mongo DB"
                  languages={["mongodb", "node", "express", "js", "css", "bootstrap"]}
                  body={
                    <div>
                      <p>An online journal that uses the IBM Watson NLU API to generate smart search suggestions for people, places, and things. The server side uses Node.js with Express and the client is built with Bootstrap 4.</p>
                      <h6>Skills:</h6>
                      <ul className="p-0">
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
                  
                />
                <ProjectCard
                  title="Tank Wars"
                  subtitle=""
                  languages={["csharp"]}
                  body={
                    <div>
                      <p>An online multiplayer tank game implemented in C#. The server runs as a console app and can accept multiple clients. I coded this with a partner for CS 3500 at the University of Utah.</p>
                      <h6>Skills:</h6>
                      <ul className="p-0">
                        <li>MVC architecture</li>
                        <li>Multithreaded programming</li>
                        <li>Networking and serialization</li>
                        <li>Pair programming</li>
                      </ul>
                      <p><em>Note: Source code is available only on Google Drive by request of the professor as an anti-cheating measure.</em></p>
                    </div>
                  }
                  buttons={[
                    {
                      text: "Source Code",
                      link: "https://drive.google.com/drive/folders/1RTC3nCgGwwyfH-rDea6EefxYQvfNlCuO?usp=sharing"
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
                      <ul className="p-0">
                        <li>MVC Architecture</li>
                        <li>Recursive algorithms</li>
                        <li>Making cool stuff</li>
                      </ul>
                    </div>
                  }
                  buttons={[
                    {
                      text: "Download the Latest Release",
                      link: "https://github.com/coletaylor017/minesweeper-cli/releases/download/v1.0/minesweeper.zip"
                    },
                    {
                      text: "Github Repo",
                      link: "https://github.com/coletaylor017/minesweeper-cli"
                    }
                  ]}
                  imageSrc="minesweeper.PNG"
                  
                />
                <ProjectCard
                  title="Maya Wagner Art Portfolio"
                  subtitle="React with Next JS, Bootstrap 4"
                  languages={["react", "js", "bootstrap"]}
                  body={
                    <div>
                      <p>A clean, responsive portfolio site made with React for a friend. I used a headless CMS called Strapi to let her upload pieces, edit the blog, and change the about page. The blog is set up so that if she's writing a post to promote a piece, she can feature a link to buy it in a sidebar.</p>
                      <h6>Skills:</h6>
                      <ul className="p-0">
                        <li>Routing with Next.js</li>
                        <li>Integrating a headless CMS</li>
                        <li>Responsive web design</li>
                      </ul>
                    </div>
                  }
                  buttons={[
                    {
                      text: "Visit the Site",
                      link: "https://rellios.vercel.app"
                    },
                    {
                      text: "Github Repo",
                      link: "https://github.com/coletaylor017/rellios"
                    }
                  ]}
                  imageSrc="rellios.PNG"
                  dark
                />
              </div>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="jumbotron jumbotron-fluid mb-0 footertron">
            <div className="container text-center">
              <h5>Contact me through any of these channels:</h5>
              {contactButtons}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
