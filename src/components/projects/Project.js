import React, { Component  } from 'react';

//import faExternalLinkSquareAlt from '@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExternalLinkSquareAlt, faArrowCircleRight, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faGitSquare } from "@fortawesome/free-brands-svg-icons";

library.add(faExternalLinkSquareAlt,faArrowCircleRight, faGitSquare,faTimesCircle);

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideUp: false
    };
  }

  setSlideUp(newValue) {
    this.setState({slideUp: newValue});
  }
  
  render() {
    const {title, image, description, categories=[]} = this.props.project;

    const {slideUp} = this.state

    return (
      <div className="project card">
        <div className="main-card" onClick={() => this.setSlideUp(!slideUp)}>
          <img src={image} />
          <div className="card-header">
            <div className="card-title">{title}</div>
          </div>
          <div className="card-description">{description}</div>
          <div className="card-footer">Read More
            <span>
              <FontAwesomeIcon icon="arrow-circle-right" />
            </span>
          </div>
        </div>
        <div className={`hidden-card ${slideUp ? "slideup" : "slidedown"}`}>
          <div className="card-header" onClick={() => this.setSlideUp(!slideUp)}>
            <div><span  className="card-title">Accomplishments</span>
              <FontAwesomeIcon icon="times-circle" />
            </div>
          </div>
          <div className="card-content" onClick={() => this.setSlideUp(!slideUp)}>
            {categories.length>0 && (
                <ul>
                  {categories.map((elem)=><li>{elem}</li>)}
                </ul>
              )
            }
          </div>
          <div className="card-footer">
            <a className="card-action" ariaLabel="Visit Interpol8r web app" href="https://interpol8r.herokuapp.com/" target="_blank">
            <span className="tooltiptext">View</span>
              
              <FontAwesomeIcon icon="external-link-square-alt" />
            </a>
            <a className="card-action" ariaLabel="Visit Interpol8r web app" href="https://interpol8r.herokuapp.com/" target="_blank">
                <span className="tooltiptext">View Source</span>
              <FontAwesomeIcon icon={['fab',"git-square"]} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

//3 dots
//<img src="https://image.flaticon.com/icons/png/512/61/61140.png" />
