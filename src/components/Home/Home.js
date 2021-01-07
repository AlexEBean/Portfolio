import React from "react"
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      <section>
        <h1>Alex Bean</h1>
        <h5>Web Developer</h5>
      </section>
      <section className = "projects">
      <div className = "project">
          <a 
            href = "https://https://writersblock.xyz/"
            className = "link">
              Writer's Block Website
          </a>
          <br></br>
          <a 
            href = "https://github.com/Writer-s-Block-dawgs/writers-block" 
            className = "link">
              Writer's Block Github
          </a>
        </div>
        <div className = "project">
          <a 
            href = "https://libraris.xyz" 
            className = "link">
              Library Simulation Website
          </a>
          <br></br>
          <a 
            href = "https://github.com/AlexEBean/library-personal-project" 
            className = "link">
              Library Simulation Github
          </a>
        </div>
        <div className = "project">
          <a 
            href = "https://docs.google.com/document/d/1IuceaYcbLWkkJ9uwJFR5zJ6Zb10v2eWzTOyD-dMRuR8" 
            className = "link">
              Resume
          </a>
        </div>
      </section>
    </div>
  )
}
export default Home