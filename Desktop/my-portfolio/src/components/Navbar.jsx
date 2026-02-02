export default function Navbar() {
  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#home">Luke</a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
