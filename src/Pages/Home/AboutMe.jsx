export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={process.env.PUBLIC_URL + "/img/about.jpg"} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I'm a passionate Full Stack Developer dedicated to crafting innovative web applications and mobile apps that deliver exceptional user experiences. With expertise in front-end and back-end technologies, I bring ideas to life through clean code, intuitive design, and seamless functionality..
          </p>
          <p className="hero--section-description">
            I specialize in technologies like React, Node.js, Express, MongoDB, and Firebase. Whether building a dynamic single-page app or designing a robust API, I’m committed to solving real-world problems through technology and continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
}
