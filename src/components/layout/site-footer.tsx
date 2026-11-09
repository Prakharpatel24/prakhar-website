
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer-refined">
      <div className="container-editorial">
        <div className="site-footer-refined-inner">
          <div className="site-footer-brand">
            <Link href="/" aria-label="Prakhar Patel homepage">
              PP<span>®</span>
            </Link>

            <p>Built with curiosity.</p>
          </div>

          <nav
            className="site-footer-navigation"
            aria-label="Footer navigation"
          >
            <Link href="/#work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/#thoughts">Thoughts</Link>
            <Link href="/#contact">
              Contact
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </nav>
        </div>

        <div className="site-footer-bottom">
          <span>
            © {new Date().getFullYear()} Prakhar Patel
          </span>

          <span>
            ENGINEERED WITH INTENTION.
          </span>
        </div>
      </div>
    </footer>
  );
}
