import React, { Component } from 'react';

export default class ProjectCard extends Component {
    render() {
        return <div className="col-md-6 mb-4">
            <div className={"card " + (this.props.dark ? "text-light bg-dark" : null)}>
                <div className="card-header">
                    <h4>{this.props.title}</h4>
                    <h6>{this.props.subtitle}</h6>
                </div>
                <div className="card-body">

                    <p>{this.props.body}</p>

                    {this.props.buttons.map(function (button) {
                        return <a className="btn btn-primary mr-1" href={button.link} target="_blank" rel="noopener noreferrer">{button.text}</a>
                    })}

                    <hr />

                    <a href="http://ainotebook.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid" src={this.props.imageSrc} alt="" />
                    </a>
                </div>
            </div>
        </div >
    }
}