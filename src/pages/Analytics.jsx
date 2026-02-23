import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";

function Analytics() {
  const context = useContext(AppContext);
  if (!context) return null;

  const { skills, totalSkills, strongSkills, averageSkill } = context;

  // Find top skill
  const topSkill = useMemo(() => {
    return skills.reduce((max, skill) =>
      skill.level > max.level ? skill : max
    , skills[0]);
  }, [skills]);

  // Categorize skills
  const advanced = skills.filter(s => s.level >= 80).length;
  const intermediate = skills.filter(s => s.level >= 60 && s.level < 80).length;
  const beginner = skills.filter(s => s.level < 60).length;

  return (
    <section style={{
      minHeight: "100vh",
      padding: "100px 60px",
      background: "#0f172a",
      color: "#f8fafc",
    }}>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "50px" }}>
          <h1 style={{ fontSize: "2.8rem", fontWeight: 800 }}>
            Skill Analytics Overview
          </h1>
          <p style={{ opacity: 0.6 }}>
            Performance metrics and distribution insights
          </p>
        </div>

        {/* KPI Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "25px",
          marginBottom: "60px"
        }}>
          <StatCard title="Total Skills" value={totalSkills} />
          <StatCard title="Strong Skills" value={strongSkills} />
          <StatCard title="Average Level" value={`${averageSkill}%`} />
          <StatCard title="Top Skill" value={topSkill?.name} />
        </div>

        {/* Skill Breakdown */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          padding: "40px",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.08)",
          marginBottom: "50px"
        }}>
          <h2 style={{ marginBottom: "25px" }}>Skill Distribution</h2>

          {skills.map(skill => (
            <div key={skill.id} style={{ marginBottom: "20px" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.9rem"
              }}>
                <span>{skill.name}</span>
                <span style={{ opacity: 0.6 }}>{skill.level}%</span>
              </div>

              <div style={{
                height: "8px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "999px"
              }}>
                <div style={{
                  width: `${skill.level}%`,
                  height: "100%",
                  background: "#3b82f6",
                  borderRadius: "999px",
                  transition: "width 0.6s ease"
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Insights Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px"
        }}>
          <InsightCard title="Advanced Skills (80%+)" value={advanced} color="#10b981" />
          <InsightCard title="Intermediate Skills" value={intermediate} color="#f59e0b" />
          <InsightCard title="Beginner Skills" value={beginner} color="#ef4444" />
        </div>

      </div>
    </section>
  );
}

function StatCard({ title, value }) {
  return (
    <div style={{
      padding: "25px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)"
    }}>
      <p style={{ fontSize: "0.8rem", opacity: 0.6 }}>{title}</p>
      <h2 style={{ fontSize: "1.8rem", marginTop: "10px" }}>{value}</h2>
    </div>
  );
}

function InsightCard({ title, value, color }) {
  return (
    <div style={{
      padding: "25px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.03)",
      border: `1px solid ${color}33`
    }}>
      <p style={{ fontSize: "0.8rem", opacity: 0.7 }}>{title}</p>
      <h2 style={{ fontSize: "1.8rem", color, marginTop: "10px" }}>
        {value}
      </h2>
    </div>
  );
}

export default Analytics;