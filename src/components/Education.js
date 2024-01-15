import React from 'react';

class Education extends React.Component {

  state = {
    showUniversityOfCalgary: false,
    showUniversityOfWaterloo: false,
    showDelftUniversityOfTechnology: false,
  }

  handleExpand = (event) => {
    this.setState ({
      [event.target.id] : !this.state[event.target.id]
    })
  }

  render() {

    return (

      <div className="one-second-animation" >
  
          <h2 className="h2" >Education</h2>
          
          <div className="individual-resume-divs" id="showUniversityOfCalgary" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showUniversityOfCalgary" onClick={this.handleExpand} >MEng of Software Engineering</h2>
            <h3 className="h3" onClick={this.handleExpand} id="showUniversityOfCalgary" >University of Calgary</h3>
            <h4 className="h4" onClick={this.handleExpand} id="showUniversityOfCalgary" >Calgary, Alberta, Canada</h4>
            <h4 className="h4" onClick={this.handleExpand} id="showUniversityOfCalgary" >2023 - 2024</h4>
            <button id="showUniversityOfCalgary" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showUniversityOfCalgary === false ? "+ more" : "- less"} </button>
            {this.state.showUniversityOfCalgary === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >Languages and Technologies: </p>
                <p className="resume-bullet-points indented" >• Java</p>
                <p className="resume-bullet-points indented" >• C/C++</p>
                <p className="resume-bullet-points indented" >• Python</p>
                <p className="resume-bullet-points indented" >• JavaScript, React</p>
                <p className="resume-bullet-points indented" >• MySQL</p>
                <br></br>
                <p className="resume-bullet-points" >Projects:</p>
                <a href="https://github.com/BogdanConstan/Flight-Reservation-Web-Application" className="indented" rel="noopener noreferrer" target="_blank" >
                  <p className="resume-bullet-points indented" ><span role="img" aria-labelledby="link">🔗</span> Fully functional flight reservation web app. MVC architecture implemented using React for frontend, Java and MySQL for backend. </p>
                </a>

                <br></br>
                {/*<p className="resume-bullet-points" >Additional Skills: </p>
                <p className="resume-bullet-points indented" >• Teamwork and Communication</p>
                <p className="resume-bullet-points indented" >• Independent Work</p>
            <p className="resume-bullet-points indented" >• Research</p>*/}
              </div>
              :
              null
            }

          </div>
  
          <div className="individual-resume-divs" id="showUniversityOfWaterloo" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showUniversityOfWaterloo" onClick={this.handleExpand} >BASc of Nanotechnology Engineering </h2>
            <h3 className="h3" id="showUniversityOfWaterloo" onClick={this.handleExpand} >University of Waterloo</h3>
            <h4 className="h4" id="showUniversityOfWaterloo" onClick={this.handleExpand} >Waterloo, Ontario, Canada</h4>
            <h4 className="h4" id="showUniversityOfWaterloo" onClick={this.handleExpand} >2014 - 2019</h4>
            <button id="showUniversityOfWaterloo" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showUniversityOfWaterloo === false ? "+ more" : "- less"} </button>
            {this.state.showUniversityOfWaterloo === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Materials Science on Atomic Scale</p>
                <p className="resume-bullet-points" >• Nano Systems Design and Molecular Synthesis</p>
                <p className="resume-bullet-points" >• General Engineering Principles</p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" id="showDelftUniversityOfTechnology" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showDelftUniversityOfTechnology" onClick={this.handleExpand} >Chemical Engineering, International Exchange</h2>
            <h3 className="h3" id="showDelftUniversityOfTechnology" onClick={this.handleExpand} >Delft University Of Technology</h3>
            <h4 className="h4" id="showDelftUniversityOfTechnology" onClick={this.handleExpand} >Delft, Netherlands</h4>
            <h4 className="h4" id="showDelftUniversityOfTechnology" onClick={this.handleExpand} >2017-2018</h4>
            <button id="showDelftUniversityOfTechnology" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showDelftUniversityOfTechnology === false ? "+ more" : "- less"} </button>
            {this.state.showDelftUniversityOfTechnology === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Successfully completed a 5 month exchange program</p>
                <p className="resume-bullet-points" >• Completed courses were accredited towards my degree at Waterloo</p>
              </div>
              :
              null
            }
          </div>
            
      </div>
  
    );

  }
  
}

export default Education;