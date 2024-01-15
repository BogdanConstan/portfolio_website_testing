import React from 'react';

function Skills() {

  return (

    <div className="one-second-animation" >

        <h2 className="h2" >Skills</h2>

        <div className= "components" id="skills-div" >

          <div className="skills-divs" >
            
              <h2 className="h2-standard" >Technical</h2>
                <h3 className="h3-standard" >Languages</h3>
                  <div className="resume-bullet-points-div" >
                    <p className="resume-bullet-points" >• Java</p>
                    <p className="resume-bullet-points" >• C/C++</p>
                    <p className="resume-bullet-points" >• Python</p>
                    <p className="resume-bullet-points" >• SQL</p>
                    <p className="resume-bullet-points" >• JavaScript (Node.js)</p>
                    <p className="resume-bullet-points" >• MATLAB</p>
                  </div>
                <h3 className="h3-standard" >FrameWorks</h3>
                  <div className="resume-bullet-points-div" >
                      <p className="resume-bullet-points" >• SpringBoot</p>
                      <p className="resume-bullet-points" >• React</p>
                      <p className="resume-bullet-points" >• Scikit-Learn</p>
                      <p className="resume-bullet-points" >• Apache Hadoop</p>
                      <p className="resume-bullet-points" >• Apache Spark</p>
                      <p className="resume-bullet-points" >• PyTorch</p>
                  </div>
                <h3 className="h3-standard" >Developer Tools</h3>
                  <div className="resume-bullet-points-div" >
                      <p className="resume-bullet-points" >• Git</p>
                      <p className="resume-bullet-points" >• Docker</p>
                      <p className="resume-bullet-points" >• PyCharm</p>
                      <p className="resume-bullet-points" >• VS Code</p>
                      <p className="resume-bullet-points" >• Eclipse</p>
                  </div>
            </div>

            <div className="skills-divs" >
            
              <h2 className="h2-standard" >Languages</h2>
                <div className="resume-bullet-points-div" >
                  <p className="resume-bullet-points" >• English: Native Speaker</p>
                  <p className="resume-bullet-points" >• Romanian: Native Speaker</p>
                  <p className="resume-bullet-points" >• French: Basic</p>
                </div>

            </div>

          </div>

    </div>
    
  );
  
}

export default Skills;