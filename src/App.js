import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './ProjectCard';
import ContactMenu from './ContactMenu';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.8.0/devicon.min.css"></link>
      <div>
        <div className="scrollspy">
          <div data-spy="scroll" data-target="#main-nav" data-offset="50">
            <div className="jumbotron jumbotron-fluid main-jumbotron text-light py-5 mb-0">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-12 col-md-auto justify-content-center justify-content-md-right text-center text-md-right">
                    <img src="cole-rainbow.jpg" alt="Cole Taylor" className="img-fluid profile-photo mw-100 mb-4 mb-md-0" />
                  </div>
                  <div className="col-12 col-md-auto text-center text-lg-left">
                    <span className="mb-3"><h3 className="d-inline-block pr-md-2"><strong>Cole Taylor</strong></h3><h5 class="d-inline-block">Software Developer</h5></span>
                    <div class="mt-3">
                      <ContactMenu includeResume />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid px-0 text-center">
              <h2 className="pt-5 pb-5 my-4">My Work</h2>
              {/* <hr className="mx-5" /> */}
              <div className="row">
                <ProjectCard
                  title="AI Notebook"
                  subtitle="Personal Project"
                  languages={["mongodb", "node", "express", "js", "css", "bootstrap"]}
                  body={
                    <div>
                      <p>An online journal that integrates a NLU web API. It can summarize your journal entries, suggest search terms, and generate charts showing what you're thinking about over time. </p>
                      <p>I built some simple authenticated web API routes so that the frontend can live update when the user presses certain buttons.</p>
                      <p>The site is fully responsive and works well on all screen sizes.</p>
                      <h6>Skills:</h6>
                      <ul className="p-0 project-card-bullet">
                        <li>Responsive CSS 3 & Bootstrap 4</li>
                        <li>Client-side and server-side form validation</li>
                        <li>Non-relational database querying</li>
                        <li>Designing a web API</li>
                      </ul>
                    </div>
                  }
                  buttons={[
                    {
                      text: "Visit the Site",
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
                  title="School Authority"
                  subtitle="Contract Project"
                  languages={["node", "typescript", "css", "bootstrap"]}
                  body={
                    <div>
                      <p>School Authority is a website that aggregates and makes data about US colleges accessible. I wrote server-side Typescript that queries for and sends college data to the frontend. I also created and executed designs for responsive charts written with Javscript and CSS.</p>
                      <h6>Skills:</h6>
                      <ul className="p-0 project-card-bullet">
                        <li>UI Design</li>
                        <li>Agile development on a small team</li>
                        <li>Responsive CSS 3 & Bootstrap 4</li>
                      </ul>
                    </div>
                  }
                  buttons={[
                    {
                      text: "Visit the Site",
                      link: "https://schoolauthority.org/colleges/arizona-state-university"
                    }
                  ]}
                  imageSrc="schoolAuthorityPreview.png"
                />
                <ProjectCard
                  title="Art Portfolio for Maya Wagner"
                  subtitle="Personal Project"
                  languages={["react", "js", "bootstrap"]}
                  body={
                    <div>
                      <p>A responsive portfolio site made with React for a friend. I used a headless CMS to let her upload art pieces, edit the blog, and change the about page. The blog is set up so that if she's writing a post to promote a piece, she can feature a link to buy it in a sidebar. The focus was on an extremely simple user interface so that she could start manging her site with little or no learning curve.</p>
                      <h6>Skills:</h6>
                      <ul className="p-0 project-card-bullet">
                        <li>Project manegement & agile development</li>
                        <li>CMS integration</li>
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
                <ProjectCard
                  title="Minesweeper"
                  subtitle="Personal Project"
                  languages={["csharp"]}
                  body={
                    <div>
                      <p>A minesweeper game written in C# that runs in the command line. I wrote this in two days over Christmas break 2020. It uses proper MVC so you could make a GUI if you wanted to. But then, would you ever want to when the command line version looks this cool?</p>
                      <h6>Skills:</h6>
                      <ul className="p-0 project-card-bullet">
                        <li>Recursive algorithms</li>
                        <li>Design patterns</li>
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
              </div>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="jumbotron jumbotron-fluid mb-0 footertron">
            <div className="container text-center">
              <h5>Contact me through any of these channels:</h5>
              <ContactMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
