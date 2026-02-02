const projects = [
  {
    name: "Airflow + Spark Data Pipeline",
    desc: "Production-style ETL/ELT pipeline with data quality checks, partitioning, and analytics-ready outputs (Bronze/Silver/Gold).",
    tags: ["Airflow", "Spark", "Python", "SQL", "AWS"],
    image: "/projects/airflow.png",
    github: "https://github.com/YOUR_USERNAME/YOUR_REPO",
    demo: "", // optional
  },
  {
    name: "Fraud Detection (Hybrid ML)",
    desc: "Feature engineering + model training + evaluation + explainability (SHAP). Focused on real-world fraud detection patterns.",
    tags: ["Python", "ML", "SHAP", "Pandas", "Sklearn"],
    image: "/projects/fraud.png",
    github: "https://github.com/YOUR_USERNAME/YOUR_REPO",
    demo: "", // optional
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((p) => (
          <article key={p.name} className="project-card">
            <div className="project-image">
              <img
                src={p.image}
                alt={p.name}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/900x520.png?text=Project+Screenshot";
                }}
              />
            </div>

            <div className="project-body">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>

              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="project-actions">
                <a className="link-btn" href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {p.demo ? (
                  <a className="link-btn secondary" href={p.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

