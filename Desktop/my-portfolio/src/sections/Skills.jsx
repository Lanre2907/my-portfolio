const skills = [
  "Python", "SQL", "Spark", "PySpark", "Airflow", "Databricks",
  "AWS (S3/Glue/Redshift)", "Azure (ADF)", "GCP (BigQuery)",
  "Terraform", "GitHub Actions", "Data Modeling", "Data Quality"
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="pill-wrap">
        {skills.map((s) => (
          <span key={s} className="pill">{s}</span>
        ))}
      </div>
    </section>
  );
}
