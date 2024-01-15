function Project(props) {
  const handleGetName = (event) => {
    let projectName = event.target.id;
    handleChangeCurrentlyShowing(projectName);
  };

  const handleChangeCurrentlyShowing = (projectName) => {
    props.handleChangeCurrentlyShowing(projectName);
  };

  return (
    <div className="components" id="projects-grid">
      <div className="project-divs">
        <h2 className="project-div-headers" id="AlwaysBalanced">
          Full Stack Flight Reservation Web Application
        </h2>
        <p className="project-blurb" id="AlwaysBalanced">
          Fully functional flight reservation web app. MVC architecture implemented using React for frontend, Java and MySQL for backend.
        </p>
        <a href="https://github.com/BogdanConstan/Flight-Reservation-Web-Application" rel="noopener noreferrer" target="_blank">
          View on GitHub
        </a>
        {/*<img src={require("../media/always-balanced-screenshot.png")} alt='' className="project-screenshots" id="AlwaysBalanced" />*/}
      </div>

      <div className="project-divs">
        <h2 className="project-div-headers">See more on GitHub</h2>
        <a href="https://github.com/BogdanConstan" rel="noopener noreferrer" target="_blank">
          <img src={require("../media/github-icon.svg")} alt='' className="icons" id="project-github-icon" />
        </a>
      </div>
    </div>
  );
}

export default Project;
