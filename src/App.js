import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './Project';
import './App.css';

function App() {
	const background = "polygon-bg.jpeg";
	const contactButtons = <div>
		<a href="https://www.github.com/coletaylor017" target="_blank" className="btn btn-dark mr-1">GitHub</a>
		<a href="https://www.linkedin.com/in/coletaylor017" target="_blank" className="btn btn-primary mr-1">LinkedIn</a>
		<a href="mailto:coletaylor017@gmail.com" target="_blank" className="btn btn-success mr-1">Email me</a>
	</div>

	return <div>
		<div className="scrollspy">
			<div data-spy="scroll" data-target="#main-nav" data-offset="50">
				<div className="jumbotron jumbotron-fluid main-jumbotron" style={{ backgroundImage: "url(" + background + ")" }}>
					<div className="container">
						<div className="row">
							<div className="col col-auto">
								<img src="professionalPhoto.jpg" className="img-fluid rounded-circle profile-photo mw-100" />
							</div>
							<div className="col">
								<h1>Cole Taylor</h1>
								<h5>Java, Javascript, Node.js, React, MongoDB, Bootstrap</h5>
								{contactButtons}
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<h2>My Work</h2>
					<hr className="divider" />
					<div className="row">
						<Project
							title="Art Portfolio"
							subtitle="React with Next JS, Bootstrap 4"
							body="A clean, responsive portfolio site made with React. I used a headless CMS called Strapi to allow her to upload pieces, edit the blog, and change the about page. The blog is set up so that if she's writing a post to promote a piece, she can feature a link to buy it in a dedicated sidebar."
							buttons={[
								{
									text: "Visit the site",
									link: "https://rellios.herokuapp.com"
								}
							]}
							imageSrc="rellios.png"
							dark
						/>
						<Project
							title="Ai Notebook"
							subtitle="Express JS, Semantic UI, Mongo DB"
							body="An online journal that produces AI-driven feedback on one's mood and thought patterns over time. Users can tag journal entries and display them in groups, as well as view data points over time with charts created using Chart JS. The dashboard has a featured quote that changes every day and admin users can modify the bank of quotes that are displayed."
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
							imageSrc="writingblocks-thumbnail.png"
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
}

export default App;
