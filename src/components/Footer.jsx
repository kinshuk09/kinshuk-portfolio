import { profile } from '../data/profile';
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="wordmark" href="#home" title="Back to top">
          kg<span>.</span>
          <span className="wordmark-name">KINSHUK GOEL</span>
        </a>
        <p>Marketing. Data. Engineering. Experience.</p>
        <span>© {new Date().getFullYear()} Kinshuk Goel</span>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
