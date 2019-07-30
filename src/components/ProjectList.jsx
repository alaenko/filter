import React from 'react'
import PropTypes from 'prop-types'

function ProjectList(props) {
  const {projects} = props;

  return (
    <ul>
      {projects.map((project, index) => (
        <li key = {index}>
          <img src = {project.img}></img>
        </li>
      ))}
    </ul>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.instanceOf(Array).isRequired
}

export default ProjectList

