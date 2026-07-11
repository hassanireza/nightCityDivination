import { useEffect, useState } from 'react';

export function NavBar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = (): void => setMenuOpen(false);

  return (
    <nav className={`nav-bar${menuOpen ? ' nav-bar-open' : ''}`}>
      <div className="nav-logo">
        <span className="nav-logo-symbol" aria-hidden="true">⬡</span>
        <span className="nav-logo-text">
          DROWNED SIGNAL<span className="nav-logo-sub">| v2.0.77</span>
        </span>
      </div>

      <button
        type="button"
        className={`nav-menu-toggle${menuOpen ? ' is-active' : ''}`}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav-links"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links${menuOpen ? ' is-open' : ''}`} id="mobile-nav-links">
        <a href="#arcana" className="nav-link" onClick={closeMenu}>DIVINATION</a>
        <a href="#lore" className="nav-link" onClick={closeMenu}>LORE</a>
        <a href="#arcana" className="nav-link" onClick={closeMenu}>ORACLE</a>
        <div className="nav-status nav-status-mobile">
          <span className="status-dot" aria-hidden="true" />
          <span className="status-text">CHANNEL SUBMERGED · ACTIVE</span>
        </div>
      </div>

      <div className="nav-status">
        <span className="status-dot" aria-hidden="true" />
        <span className="status-text">CHANNEL SUBMERGED · ACTIVE</span>
      </div>

      {menuOpen && <div className="nav-menu-backdrop" onClick={closeMenu} aria-hidden="true" />}
    </nav>
  );
}
