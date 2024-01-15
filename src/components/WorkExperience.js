import React from 'react';

class WorkExperience extends React.Component {

  state = {
    showActiveLearningTechnician: false,
    showProjectManager: false,
    showTestProcessEngineer: false,
    showIQC: false,
    showKPM: false,
  }

  handleExpand = (event) => {
    this.setState ({
      [event.target.id] : !this.state[event.target.id]
    })
  }

  render() {

    return (

      <div className="one-second-animation" >
  
          <h2 className="h2" >Work Experience</h2>
          
          <div className="individual-resume-divs" id="showActiveLearningTechnician" onClick={this.handleExpand} >
            
            <h2 className="h2-standard individual-resume-divs-headers" id="showActiveLearningTechnician" onClick={this.handleExpand} >Active Learning Technician</h2>
            <h3 className="h3" id="showActiveLearningTechnician" onClick={this.handleExpand} >Schulich School of Engineering, University of Calgary</h3>
            <h4 className="h4" id="showActiveLearningTechnician" onClick={this.handleExpand} >Calgary, Alberta, Canada</h4>
            <h4 className="h4" id="showActiveLearningTechnician" onClick={this.handleExpand} >2023 - Present</h4>
            <button id="showActiveLearningTechnician" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showActiveLearningTechnician === false ? "+ more" : "- less"} </button>
            {this.state.showActiveLearningTechnician === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Prepared lab equipment, conducted demonstrations, and guided students during experiments.</p>
                <p className="resume-bullet-points" >• Collaborated with instructors to develop active learning initiatives aligned with the curriculum.</p>
                <p className="resume-bullet-points" >• Offered technical support for students for 3D Printing, as well as arduino programming.</p>
                <p className="resume-bullet-points" >• Documented lab procedures, managed inventory, and ensured compliance with safety standards.</p>
              </div>
              :
              null
            }

          </div>
  
          <div className="individual-resume-divs" id="showProjectManager" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showProjectManager" onClick={this.handleExpand} >Project Manager</h2>
            <h3 className="h3" id="showProjectManager" onClick={this.handleExpand} >XpertONE LTD</h3>
            <h4 className="h4" id="showProjectManager" onClick={this.handleExpand} >Kitchener, Ontario, Canada</h4>
            <h4 className="h4" id="showProjectManager" onClick={this.handleExpand} >2019-2022</h4>
            <button id="showProjectManager" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showProjectManager === false ? "+ more" : "- less"} </button>
            {this.state.showProjectManager === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Manage total construction process from initial planning to project completion.</p>
                <p className="resume-bullet-points" >• Analyze project risks to mitigate their impact throughout the construction project lifecycle.</p>
                <p className="resume-bullet-points" >• Prepare estimates and manage procurement processes.</p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" id="showTestProcessEngineer" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showTestProcessEngineer" onClick={this.handleExpand} >Test & Process Engineer</h2>
            <h3 className="h3" id="showTestProcessEngineer" onClick={this.handleExpand} >Angstrom Engineering</h3>
            <h4 className="h4" id="showTestProcessEngineer" onClick={this.handleExpand} >Kitchener, Ontario, Canada</h4>
            <h4 className="h4" id="showTestProcessEngineer" onClick={this.handleExpand} >2018</h4>
            <button id="showTestProcessEngineer" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showTestProcessEngineer === false ? "+ more" : "- less"} </button>
            {this.state.showTestProcessEngineer === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Tested & operated thin-film deposition equipment for PVD and CVD.</p>
                <p className="resume-bullet-points" >• Developed test processes for high volume custom coating applications.</p>
                <p className="resume-bullet-points" >• Created a custom VBA program to automate the creation of commissioning forms used by all process engineers.</p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" id="showIQC" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showIQC" onClick={this.handleExpand} >Nano Photonics & Quantum Optics Researcher</h2>
            <h3 className="h3" id="showIQC" onClick={this.handleExpand} >Institute for Quantum Computing</h3>
            <h4 className="h4" id="showIQC" onClick={this.handleExpand} >Waterloo, Ontario, Canada</h4>
            <h4 className="h4" id="showIQC" onClick={this.handleExpand} >2016</h4>
            <button id="showIQC" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showIQC === false ? "+ more" : "- less"} </button>
            {this.state.showIQC === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Designed and implemented an original circuit to power opto-mechanical shutters for waveguide applications.</p>
                <p className="resume-bullet-points" >• Experience in safe soldering, wiring, PCB design, optical design, circuit simulation, 3-D printing software and laser engraving.</p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" id="showKPM" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showKPM" onClick={this.handleExpand} >Mining & Metallurgy Researcher</h2>
            <h3 className="h3" id="showKPM" onClick={this.handleExpand} >Kingston Process Metallurgy</h3>
            <h4 className="h4" id="showKPM" onClick={this.handleExpand} >Kingston, Ontario, Canada</h4>
            <h4 className="h4" id="showKPM" onClick={this.handleExpand} >2016-2017</h4>
            <button id="showKPM" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showKPM === false ? "+ more" : "- less"} </button>
            {this.state.showKPM === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Used conservation knowledge to correctly and safely handle a variety of historical objects.</p>
                <p className="resume-bullet-points" >• Marked and accessioned books, clothing, metal, and wooden objects in a non-permanent way, according to current museum standards.</p>
                <p className="resume-bullet-points" >• Completed basic conservation tasks including cleaning and condition checking to ensure the continued preservation of objects.</p>
                <p className="resume-bullet-points" >• Learned about different systems of museum governance in order to better understand operations.</p>
              </div>
              :
              null
            }
          </div>
  
      </div>
  
    );

  }
  
}

export default WorkExperience;