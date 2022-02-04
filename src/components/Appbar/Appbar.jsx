import "./Appbar.css";

export function Appbar() {
  return (
    <header>
      <div className="headerContent">
        <span className="headerName">Ashley Harmon</span>
        <div className="navLinks">
          <a href="#Home">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Experience">Workshops</a>
        </div>
      </div>
    </header>
  );
}
