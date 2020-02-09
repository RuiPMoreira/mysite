import React, { Component } from 'react';
import projects from "../../data/projects";

import Project from "./Project";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        {projects.map((project, index) => <Project key={index} project={project} />)}
      </div>
    );
  }
}