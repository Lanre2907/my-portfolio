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
          <h1>Luke Agbetu</h1>
          <h2>Data Engineer II</h2>
          <p>
            I build reliable, scalable data platforms using SQL, Python, Spark,
            Airflow, Databricks, and cloud services across AWS, Azure, and GCP.
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
