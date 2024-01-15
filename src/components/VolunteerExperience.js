import React from 'react';

class VolunteerExperience extends React.Component {

  state = {
    showRCCAC: false,
  }

  handleExpand = (event) => {
    this.setState ({
      [event.target.id] : !this.state[event.target.id]
    })
  }

  render() {

    return (



      <div className="one-second-animation" >
  
          <h2 className="h2" >Volunteer Experience</h2>

          <div className="individual-resume-divs" id="showRCCAC" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showRCCAC" onClick={this.handleExpand} >Director at Large</h2>
            <h3 className="h3" id="showRCCAC" onClick={this.handleExpand} >Romanian-Canadian Cultural Association of Calgary</h3>
            <h4 className="h4" id="showRCCAC" onClick={this.handleExpand} >Calgary, Alberta, Canada</h4>
            <h4 className="h4" id="showRCCAC" onClick={this.handleExpand} >2023 - Present</h4>
            <button id="showRCCAC" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showRCCAC === false ? "+ more" : "- less"} </button>
            {this.state.showRCCAC === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Help plan, organize and host events for members of the community.</p>
                <p className="resume-bullet-points" >• Promote and encourage the integration of traditional Romanian culture with Canadian culture.</p>
              </div>
              :
              null
            }

          </div>
  
      </div>
  
    );

  }
  
}

export default VolunteerExperience;