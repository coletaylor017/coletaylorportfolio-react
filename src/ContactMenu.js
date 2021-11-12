import React, { Component } from 'react';

export default class ContactMenu extends Component {
    render() {
        return <div>
		    <a href="https://www.github.com/coletaylor017" target="_blank" rel=" noopener noreferrer" className="btn mb-2 btn-dark mr-1">GitHub</a>
		    <a href="https://www.linkedin.com/in/coletaylor017" target="_blank" rel=" noopener noreferrer" className="btn mb-2 btn-primary mr-1">LinkedIn</a>
		    <a href="mailto:coletaylor017@gmail.com" target="_blank" rel=" noopener noreferrer" className="btn mb-2 btn-success mr-1">Email me</a>
            {this.props.includeResume ? <a href="https://drive.google.com/uc?export=download&id=1i7RL-tV20cnSHe43hMHUPh8p-m_caDDD" className="btn mb-2 btn-outline-light mr-1">Download my Resume</a> : ""}
	    </div>
    }
}
