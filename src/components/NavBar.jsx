export default function NavBar() {
  return (
    <nav className="site-nav" aria-label="Site navigation">
      <div className="site-nav-inner">
        <a href="#/" className="site-nav-logo" aria-label="The Trust Project — home">
          <svg width="24" height="16" viewBox="0 0 48 32" fill="none" aria-hidden="true">
            <circle cx="17" cy="16" r="13" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.85" />
            <circle cx="31" cy="16" r="13" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.85" />
          </svg>
          <span>The Trust Project</span>
        </a>
        <div className="site-nav-links">
          <a href="#/typology">About</a>
          <a href="#/profiles">Explore Types</a>
          <a href="#/dimensions">Dimensions</a>
        </div>
        <a href="#/" className="btn-primary site-nav-cta">
          Find Your Type →
        </a>
      </div>
    </nav>
  )
}
