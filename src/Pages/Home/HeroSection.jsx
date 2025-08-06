export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm McDonald</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I specialize in building high-quality web and mobile applications
            from start to finish. I turn complex problems into scalable,
            elegant solutions using modern technologies.
          </p>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
      </div>

      <div className="hero--section--img">
        <img src={process.env.PUBLIC_URL + "/img/mac.png"} alt="Hero Section" className="hero-img"/>
      </div>
    </section>
  );
}
