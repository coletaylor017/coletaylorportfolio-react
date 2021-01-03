import React, { Component } from 'react';

export default class ProjectCard extends Component {
    render() {
        const languageIconMap = {
            "mongodb": "devicon-mongodb-plain",
            "csharp": "devicon-csharp-plain",
            "js": "devicon-javascript-plain",
            "node": "devicon-nodejs-plain",
            "bootstrap": "devicon-bootstrap-plain",
            "java": "devicon-java-plain",
            "express": "devicon-express-original",
            "react": "devicon-react-original",
            "css": "devicon-css3-plain"
        }
        return <div className="col-12 mb-4">
            <div className={"card " + (this.props.dark ? "text-light bg-dark" : null)}>
                <div className="card-header">
                    <h4>{this.props.title}</h4>
                    <h4>
                        {this.props.languages.map(function (language) {
                            return <i class={"mr-2 " + languageIconMap[language]}></i>
                        })}
                    </h4>
                    {/* <h6>{this.props.subtitle}</h6> */}
                </div>
                <div className="card-body">
                    <div className="row mb-1">
                        <div className="col-12 col-md-6 mb-3">
                            {this.props.body}
                            {this.props.buttons.map(function (button) {
                                return <a key={button.text} className="btn btn-primary mr-1 mb-1" href={button.link} target="_blank" rel="noopener noreferrer">{button.text}</a>
                            })}
                        </div>
                        <div className="col-12 col-md-6">
                            <img className="img-fluid border" src={this.props.imageSrc} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    }
}