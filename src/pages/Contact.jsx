const Contact = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "120px 60px",
        background: "#0f172a",
        color: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "70px" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Get in Touch
          </h1>

          <p
            style={{
              maxWidth: "600px",
              lineHeight: 1.7,
              opacity: 0.7,
            }}
          >
            Whether you have a project idea, collaboration opportunity, or
            professional inquiry, I’d be glad to connect and discuss how we
            can work together.
          </p>
        </div>

        {/* Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
          }}
        >
          {/* Contact Info */}
          <div>
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                marginBottom: "25px",
              }}
            >
              Contact Information
            </h2>

            <div style={{ marginBottom: "25px", opacity: 0.8 }}>
              <strong>Email</strong>
              <p style={{ marginTop: "6px" }}>
                harshbardhansingh2827@gmail.com
              </p>
            </div>

            <div style={{ marginBottom: "25px", opacity: 0.8 }}>
              <strong>Location</strong>
              <p style={{ marginTop: "6px" }}>
                India
              </p>
            </div>

            <div style={{ marginBottom: "25px", opacity: 0.8 }}>
              <strong>Availability</strong>
              <p style={{ marginTop: "6px" }}>
                Open to freelance & collaboration opportunities
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              background: "rgba(255,255,255,0.03)",
              padding: "40px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div>
              <label style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                style={{
                  width: "100%",
                  marginTop: "8px",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "transparent",
                  color: "white",
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  marginTop: "8px",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "transparent",
                  color: "white",
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                style={{
                  width: "100%",
                  marginTop: "8px",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "transparent",
                  color: "white",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                marginTop: "10px",
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                background: "#3b82f6",
                color: "white",
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: "0.03em",
              }}
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;