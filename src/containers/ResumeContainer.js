import React, { useEffect, useState } from 'react';
import Resume from '../components/Resume';
import ShowResumeContainer from './ShowResumeContainer';
import { useNavigate } from 'react-router-dom';

function ResumeContainer(props) {
  const [currentlyShowing, setCurrentlyShowing] = useState('None');
  const [resumeKey, setResumeKey] = useState(0);
  const navigate = useNavigate();

  const handleChangeCurrentlyShowing = (projectName) => {
    setCurrentlyShowing(projectName);
  };

  useEffect(() => {
    if (!props.forceUpdate) {
      navigate('/resume');
    }
  }, [props.forceUpdate, navigate]);
  

  useEffect(() => {
    if (props.forceUpdate) {
      navigate('/resume');
    }
  }, [props.forceUpdate, navigate]);

  return (
    <div className="one-second-animation">
      {currentlyShowing === 'None' ? (
        <div className="containers">
          <h2 className="h2">Résumé</h2>
          <h2>
            <a
              href="https://raw.githubusercontent.com/BogdanConstan/BogdanConstan.github.io/gh-pages/Bogdan_Constan_Resume.pdf"
              id="PDF-link"
              rel="noopener noreferrer"
              target="_blank"
              download
            >
              Download PDF Version
            </a>
          </h2>
          <Resume key={resumeKey} handleChangeCurrentlyShowing={handleChangeCurrentlyShowing} />
        </div>
      ) : (
        <div className="containers">
          <ShowResumeContainer
            currentlyShowing={currentlyShowing}
            handleChangeCurrentlyShowing={handleChangeCurrentlyShowing}
          />
        </div>
      )}
    </div>
  );
}

export default ResumeContainer;
