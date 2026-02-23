const About = () => {
  return (
    <div className="container-fluid section-padding px-5 text-white">

      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5">About Me 👨‍💻</h2>
        <div className="section-divider"></div>
      </div>

      <div className="row align-items-center">

        {/* Left Side – Profile Info */}
        <div className="col-md-6 mb-4">
          <div className="glass-card">
            <h3 className="mb-3">Harsh Bardhan Singh</h3>
            <p>
              I am a passionate Full Stack Developer focused on building
              intelligent and scalable web applications. I enjoy turning
              complex problems into simple, beautiful, and intuitive designs.
            </p>

            <p className="mt-3">
              My expertise lies in React, backend development, AI systems,
              and data-driven decision making. I believe in writing clean,
              maintainable code and constantly learning new technologies.
            </p>

            <button className="btn-neon mt-3">
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Side – Skills & Strengths */}
        <div className="col-md-6 mb-4">
          <div className="glass-card">
            <h4 className="mb-4">Core Strengths ⚡</h4>

            <div className="mb-3">
              <p>Frontend Development</p>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  className="progress-bar bg-info"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div className="mb-3">
              <p>Backend & APIs</p>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  className="progress-bar bg-success"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="mb-3">
              <p>Machine Learning</p>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div className="mb-3">
              <p>Problem Solving</p>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Extra Section – Journey */}
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="glass-card text-center">
            <h4>My Journey 🌟</h4>
            <p className="mt-3">
              Started as a curious learner exploring programming basics,
              evolved into building full-scale applications and intelligent systems.
              My goal is to contribute to impactful projects that combine
              technology and creativity.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;