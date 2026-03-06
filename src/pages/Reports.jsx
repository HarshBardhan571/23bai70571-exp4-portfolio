import { useSelector, useDispatch } from "react-redux";
import { removeSkill, clearSkills, addSkill } from "../redux/slices/skillSlice";
import { useMemo, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

function Reports() {

  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.skills);
  const { darkMode } = useContext(AppContext);

  const [newSkill, setNewSkill] = useState("");

  const totalSkills = useMemo(() => skills.length, [skills]);

  const containerStyle = {
    minHeight: "100vh",
    padding: "100px 60px",
    background: darkMode ? "#0f172a" : "#f8fafc",
    color: darkMode ? "white" : "black"
  };

  const cardStyle = {
    padding: "20px",
    borderRadius: "14px",
    background: darkMode ? "rgba(255,255,255,0.05)" : "white",
    border: "1px solid rgba(255,255,255,0.08)",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  return (
    <section style={containerStyle}>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Skill Reports Dashboard
        </h1>
        <p style={{ opacity: 0.7, marginBottom: "40px" }}>
          Manage and analyze your technical skills
        </p>

        {/* Stats Card */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
          gap: "20px",
          marginBottom: "40px"
        }}>
          <div style={{
            padding: "25px",
            borderRadius: "16px",
            background: "linear-gradient(135deg,#3b82f6,#6366f1)",
            color: "white"
          }}>
            <p>Total Skills</p>
            <h2 style={{ fontSize: "2rem" }}>{totalSkills}</h2>
          </div>
        </div>

        {/* Add Skill */}
        <div style={{
          display: "flex",
          gap: "10px",
          marginBottom: "30px"
        }}>
          <input
            type="text"
            placeholder="Add a new skill..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />

          <button
            onClick={() => {
              if (newSkill.trim()) {
                dispatch(addSkill({ id: Date.now(), name: newSkill }));
                setNewSkill("");
              }
            }}
            style={{
              padding: "12px 20px",
              borderRadius: "8px",
              border: "none",
              background: "#3b82f6",
              color: "white",
              cursor: "pointer"
            }}
          >
            Add Skill
          </button>
        </div>

        {/* Skills List */}
        {skills.map(skill => (
          <div key={skill.id} style={cardStyle}>

            <span style={{ fontWeight: 500 }}>
              {skill.name}
            </span>

            <button
              onClick={() => dispatch(removeSkill(skill.id))}
              style={{
                background: "#ef4444",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                color: "white",
                cursor: "pointer"
              }}
            >
              Remove
            </button>

          </div>
        ))}

        {/* Clear Button */}
        <button
          onClick={() => dispatch(clearSkills())}
          style={{
            marginTop: "30px",
            background: "#f59e0b",
            border: "none",
            padding: "12px 22px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Clear All Skills
        </button>

      </div>

    </section>
  );
}

export default Reports;