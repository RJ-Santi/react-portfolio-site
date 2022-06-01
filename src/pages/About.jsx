function About() {
  return (
    <>
      <div className="passions-container py-5">
        <div className="passions">
            <h2 className='text-center'>Passions.</h2>
          <div className="passion-row">
            <img className="coding-gif" src="images/code-coding.gif" alt="coding-gif" />
            <h3>Web Development</h3>
            <p>I started learning how to code 5 years ago because I had a fascination with the functionality behind websites. Throughout my time learning how to code I have found a passion in creating my own websites, as well as enhancing others'
              existing sites.</p>
          </div>

          <div className="passion-row">
            <img className="pc" src="images/pc-building.gif" alt="pc-building-gif" />
            <h3 className="build">PC Building</h3>
            <p>I picked up a passion for PC building through my love for gaming. I built my first PC in 2019 and proceeded to build my second PC as a pandemic project. Since building my own PCs, I have gone on to build 3 more for close friends and a
              home-server for my parents.</p>
          </div>
        </div>
      </div>

      <div className="skills-container py-5">
        <h2 className='text-center pb-4'>Skills.</h2>

        <div className="skills row d-flex justify-content-center">
          <div className="col-md-3">
            <img className="logo" src="images/html.png" alt="HTML logo." />
          </div>
          <div className="col-md-3">
            <img className="logo" src="images/css.png" alt="CSS logo." />
          </div>
          <div className="col-md-3">
            <img className="logo" src="images/js.png" alt="JS logo." />
          </div>
          <div className="col-md-3">
            <img className="bootstrap-logo" src="images/bootstrap.png" alt="Bootstrap 5 logo." />
          </div>
          <div className="col-md-3">
            <img className="logo" src="images/github.png" alt="Github logo." />
          </div>
          <div className="col-md-3">
            <img className="logo" src="images/node.png" alt="NodeJS logo." />
          </div>
          <div className="col-md-3">
            <img className="logo" src="images/express.png" alt="ExpressJS logo." />
          </div>
          <div className="col-md-3">
            <img className="logo" src="images/react.png" alt="React logo." />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
