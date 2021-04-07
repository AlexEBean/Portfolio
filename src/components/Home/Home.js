import React from "react"
import "./Home.css"
import l1 from "../../images/libraryHome.png"
import wb1 from "../../images/wbLogin.png"
import linkedIn from "../../images/linkedin-logo.png"
import gitHub from "../../images/github-logo.png"
import resume from "../../images/resume-logo.png"

const Home = () => {

  return (
    <div className='home'>
      <section className='intro'>
            <div className='intro-name'>
                <h1>Hello, I'm</h1>
                <h1 className='name'>Alex Bean</h1>
                <h1>.</h1>
            </div>
          <h1>I'm a full-stack web developer experienced in React.</h1>
          <div className='logo-container'>
                <a href="https://github.com/AlexEBean">
                    <img className='logo-links'
                        src={gitHub} 
                        alt='Github Logo'/>
                </a>
                <a href="https://www.linkedin.com/in/alex-elijah-bean/">
                    <img className='logo-links'
                        src={linkedIn} 
                        alt='LinkedIn Logo'/>
                </a>
                <a href="https://docs.google.com/document/d/1IuceaYcbLWkkJ9uwJFR5zJ6Zb10v2eWzTOyD-dMRuR8">
                    <img className='logo-links'
                        src={resume} 
                        alt='Resume Logo'/>
                </a>
            </div>
      </section>
      <section className = "projects">
        <div className = "project">
          <img src = {l1} alt = "Personal Project"/>
          <p>A public library website simulation that includes different views between an administrator and an ordinary user.
          </p>
          <a 
            href = "https://libraris.xyz" 
            className = "home-link">
              Live Website
          </a>
          <br></br>
          <a 
            href = "https://github.com/AlexEBean/library-personal-project" 
            className = "home-link">
              Github
          </a>
        </div>
        <div className = "project">
          <img src = {wb1} alt = "Group Project"/>
            <p>A social media website website that allows users to add a story as a post.  Other users can provide feedback and the user can apply that feedback to their post. This was developed in a Scrum setting.
            </p>
            <a 
              href = "https://writers-block.xyz"
              className = "home-link">
                Live Website
            </a>
            <br></br>
            <a 
              href = "https://github.com/Writer-Block/writers-block" 
              className = "home-link">
                Github
            </a>
        </div>
      </section>
    </div>
  )
}
export default Home