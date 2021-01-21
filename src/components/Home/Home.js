import React from "react"
import "./Home.css"
import l1 from "./images/libraryHome.png"
import wb1 from "./images/wbLogin.png"

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
      </section>
      <section className = "projects">
      <div className = "project">
        <img src = {wb1} alt = "Group Project"/>
          <p>A social media website website that allows users to add part of a story as a post.  Other users can provide feedback and the user can apply that feedback to their post.
          </p>
          <a 
            href = "https://writersblock.xyz"
            className = "home-link">
              Writer's Block Website
          </a>
          <br></br>
          <a 
            href = "https://github.com/Writer-Block/writers-block" 
            className = "home-link">
              Writer's Block Github
          </a>
        </div>
        <div className = "project">
          <img src = {l1} alt = "Personal Project"/>
          <p>A public library website simulation that includes different views between an administrator and an ordinary user.
          </p>
          <a 
            href = "https://libraris.xyz" 
            className = "home-link">
              Library Simulation Website
          </a>
          <br></br>
          <a 
            href = "https://github.com/AlexEBean/library-personal-project" 
            className = "home-link">
              Library Simulation Github
          </a>
        </div>
      </section>
    </div>
  )
}
export default Home