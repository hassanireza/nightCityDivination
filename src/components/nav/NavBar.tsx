export function NavBar(): JSX.Element {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <span className="nav-logo-symbol" aria-hidden="true">⬡</span>
        <span className="nav-logo-text">
          DROWNED SIGNAL<span className="nav-logo-sub">| v2.0.77</span>
        </span>
      </div>
      <div className="nav-links">
        <a href="#arcana" className="nav-link">DIVINATION</a>
        <a href="#lore" className="nav-link">LORE</a>
        <a href="#arcana" className="nav-link">ORACLE</a>
      </div>
      <div className="nav-status">
        <span className="status-dot" aria-hidden="true" />
        <span className="status-text">CHANNEL SUBMERGED · ACTIVE</span>
      </div>
    </nav>
  );
}
