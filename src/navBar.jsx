export function NavBar() {
  return (
    <div className="nav-wrapper">
      <div className="logo-container">Logo here</div>

      <nav>
        <input type="checkbox" className="hidden" id="menuToggle" />
        <label htmlFor="menuToggle" className="menu-btn">
          <div className="menu"></div>
          <div className="menu"></div>
          <div className="menu"></div>
        </label>
        <div className="nav-container">
          <ul className="nav-tabs">
            <li className="nav-tab">Home</li>
            <li className="nav-tab">Products</li>
            <li className="nav-tab">Services</li>
            <li className="nav-tab">PQR</li>
            <li className="nav-tab">Contact</li>
            <li className="nav-tab">Careers</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
