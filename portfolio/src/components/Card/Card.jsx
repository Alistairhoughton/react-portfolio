import React from "react";
import PropTypes from "prop-types";
import CardStyles from "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  return (
    <article className="card-container">
      <h2 className="card-title">{props.name}</h2>
      <p className="card-description">{props.description}</p>
      <div className="icon-holder">
        <a href={props.github} className="card-github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={props.deployment} className="card-deployment">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
      <p className="tech-holder">{props.tech}</p>
    </article>
  );
}


export default Card;
