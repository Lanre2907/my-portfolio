import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <section id="home" className="hero">
          <h1>Lukman Agbetu</h1>
          <h2>Data Engineer</h2>
          <p>
            Data Engineer with strong enterprise experience designing, building, and operating scalable data platforms across U.S. and international environments. Specialized in SQL-heavy data engineering, Spark-based processing, and production ETL/ELT pipelines using Python and Apache Airflow. Proven ability to own data pipelines end to end, improve data quality and reliability, and support analytics and reporting at scale across AWS, Azure, and GCP environments. Hands-on contributor in regulated and high-volume enterprise systems.
          </p>

          <div className="actions">
            <a href="/resume.pdf" className="primary">Download Resume</a>
            <a href="#projects" className="secondary">View Projects</a>
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Contact />

        <footer className="footer">
          © {new Date().getFullYear()} Luke Agbetu
        </footer>
      </main>
    </>
  );
}
