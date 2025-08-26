import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        {/* Column 1: Navigation */}
        <div className="site-footer__column">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/work">Work</Link></div>
          <div><Link to="/new">New</Link></div>
          <div><Link to="/about">About</Link></div>
          <div><Link to="/contact">Contact</Link></div>
        </div>

        {/* Column 2: Address */}
        <div className="site-footer__column site-footer__column--address">
          <div style={{ fontWeight: "bold" }}>Chermayeff & Geismar & Haviv</div>
          <div>27 West 24th Street, Suite 900</div>
          <div>New York, NY 10010</div>
          <div>212.532.4595</div>
        </div>

        {/* Column 3: Work & Press Inquiries */}
        <div className="site-footer__column site-footer__column--inquiries">
          <div style={{ fontWeight: "bold" }}>Work Inquiries</div>
          <div>
            <a href="mailto:info@cghnyc.com">info@cghnyc.com</a>
          </div>
          <br />
          <div style={{ fontWeight: "bold" }}>Press Inquiries</div>
          <div>Christopher Nutter</div>
          <div>917.770.0350</div>
          <div>
            <a href="mailto:press@cghnyc.com">press@cghnyc.com</a>
          </div>
        </div>

        {/* Column 4: Social Links */}
        <div className="site-footer__column">
          <div>
            <a href="https://twitter.com">Twitter</a>
          </div>
          <div>
            <a href="https://instagram.com">Instagram</a>
          </div>
          <div>
            <a href="https://facebook.com">Facebook</a>
          </div>
        </div>
      </div>
      <div className="site-footer__copyright">
        &copy; {new Date().getFullYear()} Chermayeff & Geismar & Haviv
      </div>
    </footer>
  );
}
