import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Photos from "./pages/Photos";

export default function App() {
  return (
    <BrowserRouter>
      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <span className="logo">Luke</span>
          <nav>
            <Link to="/">About</Link>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <Link to="/photos">Photos</Link>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                {/* HERO */}
                <section className="hero">
                  <h1>Lukman Agbetu</h1>
                  <h2>Data Engineer</h2>
                  <p>
                    Data Engineer with strong enterprise experience designing,
                    building, and operating scalable data platforms across U.S.
                    and international environments. Specialized in SQL-heavy
                    data engineering, Spark-based processing, and production
                    ETL/ELT pipelines using Python and Apache Airflow across
                    AWS, Azure, and GCP.
                  </p>

                  <div className="hero-actions">
                    <a className="btn primary" href="/resume.pdf" target="_blank">
                      Download Resume
                    </a>
                    <a className="btn secondary" href="#projects">
                      View Projects
                    </a>
                  </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="section">
                  <h3>About</h3>
                  <p>
                    I focus on building reliable, analytics-ready data pipelines
                    and platforms in regulated, high-volume enterprise
                    environments. My work emphasizes data quality, performance,
                    and end-to-end pipeline ownership.
                  </p>
                </section>

                {/* SKILLS */}
                <section id="skills" className="section">
                  <h3>Core Skills</h3>
                  <div className="skills">
                    {[
                      "Python",
                      "SQL / PL-SQL / T-SQL",
                      "Apache Spark / PySpark",
                      "Apache Airflow",
                      "Databricks",
                      "AWS (S3, Glue, Redshift)",
                      "Azure (ADF, Databricks)",
                      "GCP (BigQuery)",
                      "Terraform",
                      "Docker & Kubernetes",
                      "Data Modeling (Star / Snowflake)",
                    ].map((skill) => (
                      <span key={skill} className="skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>

                {/* PROJECTS */}
                <section id="projects" className="section">
                  <h3>Selected Projects</h3>

                  <div className="grid">
                    <div className="card">
                      <h4>Enterprise Airflow + Spark Data Pipeline</h4>
                      <p>
                        Designed and owned production-grade ETL/ELT pipelines
                        using Python, Spark, and Apache Airflow with data quality
                        checks and Bronze/Silver/Gold layers.
                      </p>
                      <p className="stack">
                        Airflow · Spark · PySpark · SQL · AWS · Azure
                      </p>
                    </div>

                    <div className="card">
                      <h4>Cloud Data Warehouse & Analytics</h4>
                      <p>
                        Built analytics-ready datasets using dimensional
                        modeling across Redshift, Snowflake, and BigQuery with
                        optimized SQL and incremental loads.
                      </p>
                      <p className="stack">
                        SQL · BigQuery · Snowflake · dbt · Power BI
                      </p>
                    </div>

                    <div className="card">
                      <h4>Cloud Infrastructure & Security Observability</h4>
                      <p>
                        Provisioned cloud infrastructure using Terraform and
                        integrated Microsoft Sentinel for security and
                        operational log analytics.
                      </p>
                      <p className="stack">
                        Terraform · Azure · Microsoft Sentinel · KQL
                      </p>
                    </div>
                  </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="section">
                  <h3>Contact</h3>
                  <p>Email: luke.agbetu@gmail.com</p>
                  <p>
                    GitHub:{" "}
                    <a href="https://github.com/Lanre2907" target="_blank">
                      github.com/Lanre2907
                    </a>
                  </p>
                </section>
              </>
            }
          />

          {/* PHOTOS PAGE */}
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
