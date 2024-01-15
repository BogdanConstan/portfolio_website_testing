import React from 'react';
import {Route, Routes, NavLink} from 'react-router-dom'
import './App.css';
import AboutContainer from './containers/AboutContainer'
import HomeContainer from './containers/HomeContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import ResumeContainer from './containers/ResumeContainer'
import ContactContainer from './containers/ContactContainer'
import NotFound from './components/NotFound'

class App extends React.Component {

  state = {
    forceUpdate: false
  }

  handleForceUpdateTrue = () => {
    this.setState ({
      forceUpdate: true
    })
  }

  handleForceUpdateFalse = () => {
    this.setState ({
      forceUpdate: false
    })
  }
  
  renderProjectsContainer = () => <ProjectsContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />
  renderAboutContainer = () => <AboutContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />
  renderResumeContainer = () => <ResumeContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />

  render() {

    return (

      <div id="homepage">
  
        <div id="navbar">   
          <NavLink to='/' exact className="navbar-links" >
              <img src={require("./media/bc.svg").default} alt='' id="logo" />
          </NavLink>     
          <NavLink to='/contact' exact className="navbar-links" >05. Contact</NavLink>
          <NavLink to='/about' exact className="navbar-links" onClick={this.handleForceUpdateTrue} >04. About</NavLink>
          <NavLink to='/resume' exact className="navbar-links" onClick={this.handleForceUpdateTrue} >03. Résumé</NavLink>
          <NavLink to='/projects' exact className="navbar-links" onClick={this.handleForceUpdateTrue} >02. Projects</NavLink>
          <NavLink to='/' exact className="navbar-links" >01. Home</NavLink>
        </div >
  
        <div id="social-links-div">
          <a href="https://github.com/BogdanConstan" rel="noopener noreferrer" target="_blank" >
            <img src={require("./media/github-icon.svg").default} alt='' className="icons" />
          </a><br></br>
          <a href="https://www.linkedin.com/in/bogdan-constan/" rel="noopener noreferrer" target="_blank" >
            <img src={require("./media/linkedin-icon.svg").default} alt='' className="icons" />
          </a><br></br>
          <a href={`mailto:bogdan.constan@gmail.com`} >
            <img src={require("./media/contact-icon.svg").default} alt='' className="icons" />
          </a>
        </div>     
  
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/about' element={<AboutContainer handleForceUpdateFalse={this.handleForceUpdateFalse} />} />

          {/*<Route exact path='/about' component={this.renderAboutContainer} />*/}
          <Route path='/projects' element={<ProjectsContainer handleForceUpdateFalse={this.handleForceUpdateFalse} />} />
          <Route path='/resume' element={<ResumeContainer handleForceUpdateFalse={this.handleForceUpdateFalse} />} />
          <Route path='/contact' element={<ContactContainer handleForceUpdateFalse={this.handleForceUpdateFalse} />} />
          <Route component={NotFound}/>
        </Routes>
  
      </div>
    
    );

  }

}

export default App;
