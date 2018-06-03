import React, { Component } from 'react';
// import {  } from 'react-materialize';

import Projects from './Projects';

class Intro extends Component {
    render() {
        const { projectData } = this.props;
        return (
            <div className="r-layout__container">
                <div className="row"></div>
                <div className="row">
                    {projectData.map((p) => (
                        <Projects
                            key={p.id} 
                            project={p}
                        />
                    ))}
                </div>
                <div className="row"></div>

            </div>
        )
    }
}

export default Intro