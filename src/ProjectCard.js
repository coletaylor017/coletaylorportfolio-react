import React, { Component } from 'react';

export default class ProjectCard extends Component {
    render() {
        const languageIconMap = {
            "mongodb": "devicon-mongodb-plain",
            "csharp": "devicon-csharp-plain",
            "js": "devicon-javascript-plain",
            "typescript": "devicon-typescript-plain",
            "node": "devicon-nodejs-plain",
            "bootstrap": "devicon-bootstrap-plain",
            "java": "devicon-java-plain",
            "express": "devicon-express-original",
            "react": "devicon-react-original",
            "css": "devicon-css3-plain"
        }
        return <div className="col-12 m-0 p-0">
            <div className={"container-fluid m-0 pt-3 pb-2 " + (this.props.dark ? "text-light bg-darker" : "")}>
                <div className="text-center pt-4 MT-5">
                    <h3>{this.props.title}</h3>
                    <p><em>{this.props.subtitle}</em></p>
                    <h4 className="mb-3">
                        {this.props.languages.map(function (language) {
                            return <i className={"mr-2 " + languageIconMap[language]}></i>
                        })}
                    </h4>
                </div>
                <div>
                    <div className="row mb-1 justify-content-center">
                        <div className="col-11 col-md-5 p-3 mb-3">
                            {this.props.body}
                            {this.props.buttons.map(function (button) {
                                return <a key={button.text} className="btn btn-primary mr-1 mb-1" href={button.link} target="_blank" rel="noopener noreferrer">{button.text}</a>
                            })}
                        </div>
                        <div className="col-11 col-md-5 p-3 mb-3">
                            <img className={"img-fluid " + (this.props.border ? "border" : "")} src={this.props.imageSrc} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    }
}