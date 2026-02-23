const Home = () => {
  return (
    <div className="container-fluid text-white">

      {/* HERO SECTION */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="display-1 fw-bold mb-3">
          Harsh Bardhan Singh
        </h1>

        <p className="lead mb-4 fs-4">
          Full Stack Developer • React • AI • Data Science
        </p>

        <div className="mb-5">
          <button className="btn-neon me-3">
            View Projects
          </button>

          
        </div>

        <div className="section-divider"></div>
      </div>


      {/* TECH STACK SECTION */}
      <div className="section-padding text-center fade-in">
        <h2 className="fw-bold mb-4">Tech Stack ⚡</h2>
        <div className="section-divider"></div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-2 col-4 mb-4">
            <div className="glass-card">React ⚛️</div>
          </div>

          <div className="col-md-2 col-4 mb-4">
            <div className="glass-card">Node.js 🟢</div>
          </div>

          <div className="col-md-2 col-4 mb-4">
            <div className="glass-card">Python 🐍</div>
          </div>

          <div className="col-md-2 col-4 mb-4">
            <div className="glass-card">SQL 🗄️</div>
          </div>

          <div className="col-md-2 col-4 mb-4">
            <div className="glass-card">Machine Learning 🤖</div>
          </div>
        </div>
      </div>


      {/* ACHIEVEMENTS SECTION */}
      <div className="section-padding text-center fade-in">
        <h2 className="fw-bold mb-4">Achievements 🏆</h2>
        <div className="section-divider"></div>

        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <h1 className="display-4 text-warning">15+</h1>
            <p>Projects Completed</p>
          </div>

          <div className="col-md-4 mb-4">
            <h1 className="display-4 text-info">3+</h1>
            <p>Internships</p>
          </div>

          <div className="col-md-4 mb-4">
            <h1 className="display-4 text-success">10+</h1>
            <p>Technologies Mastered</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;