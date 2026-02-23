const services = [
  {
    title: "Full-Stack Application Development",
    description:
      "Designing and building scalable web applications using modern frontend and backend architectures. From concept to deployment, I ensure performance, security and maintainability.",
    highlights: [
      "React & Modern UI Systems",
      "REST APIs & Backend Integration",
      "Scalable Architecture Design",
    ],
  },
  {
    title: "AI & Data-Driven Solutions",
    description:
      "Developing intelligent systems that transform data into actionable insights. I focus on building practical machine learning solutions aligned with business goals.",
    highlights: [
      "Predictive Modeling",
      "Data Processing Pipelines",
      "AI Integration into Web Apps",
    ],
  },
  {
    title: "Performance & System Optimization",
    description:
      "Improving application efficiency through code optimization, architecture refinement and performance monitoring strategies.",
    highlights: [
      "Frontend Performance Tuning",
      "Backend Efficiency Improvements",
      "System Scalability Planning",
    ],
  },
];

const Services = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "120px 60px",
        background: "#0f172a",
        color: "#f8fafc",
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: "1100px", margin: "0 auto 80px auto" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 800,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          Services
        </h1>

        <p
          style={{
            maxWidth: "650px",
            lineHeight: 1.7,
            opacity: 0.7,
            fontSize: "1rem",
          }}
        >
          I partner with individuals and organizations to design, develop and
          optimize digital systems that are scalable, maintainable and aligned
          with long-term goals.
        </p>
      </div>

      {/* Services List */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gap: "50px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              padding: "40px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                marginBottom: "15px",
              }}
            >
              {service.title}
            </h2>

            <p
              style={{
                opacity: 0.7,
                lineHeight: 1.7,
                marginBottom: "25px",
              }}
            >
              {service.description}
            </p>

            <ul style={{ paddingLeft: "20px", opacity: 0.85 }}>
              {service.highlights.map((point, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;