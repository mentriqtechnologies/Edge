import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link to="/" className="brand">
              <img src="/Logo.png" alt="Edge Institute logo" className="brand-logo" />
              <span className="brand-text">
                Edge Institute of Technology
                <small>Think Beyond. Build Beyond.</small>
              </span>
            </Link>
            <p>
              Industry-led degree programs in partnership with recognized
              campuses. Every classroom, lab and live project is delivered
              by the mentors at MentriQ Technologies.
            </p>
            <div className="foot-badges">
              <span>Multi-campus partnerships</span>
              <span>100% practical labs</span>
            </div>
          </div>

          <div>
            <h5>Explore</h5>
            <ul>
              <li><Link to="/programs">Degree Programs</Link></li>
              <li><Link to="/about">About Edge</Link></li>
              <li><Link to="/admissions">Admissions 2027</Link></li>
              <li><Link to="/insights">Insights & Stories</Link></li>
            </ul>
          </div>

          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="https://www.mentriqtechnologies.in" target="_blank" rel="noreferrer">MentriQ Technologies</a></li>
              <li><Link to="/about">Our Model</Link></li>
              <li><Link to="/contact">Contact Team</Link></li>
              <li><Link to="/admin/login">Staff Login</Link></li>
            </ul>
          </div>

          <div>
            <h5>Reach Us</h5>
            <ul className="foot-contact">
              <li>Sanganer, Jaipur, Rajasthan 302033</li>
              <li><a href="tel:+917665531312">+91 7665531312</a></li>
              <li><a href="mailto:admissions@edgeinstitute.in">admissions@edgeinstitute.in</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Edge Institute of Technology, by MentriQ Technologies. All rights reserved.</span>
          <span>Not affiliated with any browser. Pure ambition.</span>
        </div>
      </div>
    </footer>
  );
}