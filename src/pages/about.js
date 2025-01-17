// Step 1: Import your component
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>Hi there! I'm Eknoor Singh, a freshman student of IIT Bombay, currently an intern at EAcad, under which I built this website with Gatsby.</p>
    </main>
  )
}

// Step 3: Export your component
export default AboutPage