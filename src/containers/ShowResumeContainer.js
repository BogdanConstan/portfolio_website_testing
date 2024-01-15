import React from 'react';
import Education from '../components/Education';
import Skills from '../components/Skills';
import VolunteerExperience from '../components/VolunteerExperience';
import WorkExperience from '../components/WorkExperience';

function ShowResumeContainer(props) {
  const handleBackToMainResume = () => {
    props.handleBackToMainResume(); // Call the function to go back to the main resume page
  };

  return (
    <div className="one-second-animation full-resume-divs">
      {props.currentlyShowing === 'Education' ? (
        <div className="components">
          <Education handleBackToMainResume={handleBackToMainResume} />
        </div>
      ) : null}

      {props.currentlyShowing === 'Skills' ? (
        <div className="components">
          <Skills handleBackToMainResume={handleBackToMainResume} />
        </div>
      ) : null}

      {props.currentlyShowing === 'VolunteerExperience' ? (
        <div className="components">
          <VolunteerExperience handleBackToMainResume={handleBackToMainResume} />
        </div>
      ) : null}

      {props.currentlyShowing === 'WorkExperience' ? (
        <div className="components">
          <WorkExperience handleBackToMainResume={handleBackToMainResume} />
        </div>
      ) : null}
    </div>
  );
}

export default ShowResumeContainer;
