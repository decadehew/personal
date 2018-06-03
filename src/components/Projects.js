import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';

class Projects extends Component {
    render() {
        const { project } = this.props;
        return (
            <div className="col m6 l4 xl4 s12">
                <Card 
                    header={<CardTitle reveal image={project.imgLink} waves='light'/>}
                    title={project.title}
                    reveal={
                        <p>{project.description}</p>
                    }>
                    <p><a href={project.link} target="_blank"><i className="fas fa-external-link-alt"></i> Github</a></p>
                </Card>
            </div>
        )
    }
}

export default Projects