
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Thoughts", href: "/#thoughts" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header relative z-50">
      <div className="container-editorial">
        <div className="site-header-inner">
          <Link
            href="/"
            className="site-logo"
            aria-label="PP® — Prakhar Patel homepage"
            onClick={closeMenu}
          >
            PP<span>®</span>
          </Link>

          <nav
            className="site-desktop-nav"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="site-nav-item nav-link"
                aria-current={
                  pathname === "/about" &&
                    item.href === "/about"
                    ? "page"
                    : undefined
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            className="site-contact-button"
          >
            Let&apos;s talk
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="site-mobile-toggle"
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="site-mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? (
              <X size={23} aria-hidden="true" />
            ) : (
              <Menu size={23} aria-hidden="true" />
            )}
          </button>
        </div>

        <nav
          id="site-mobile-navigation"
          className={`site-mobile-nav ${menuOpen ? "is-open" : ""
            }`}
          aria-label="Mobile navigation"
          inert={!menuOpen}
        >
          {navigation.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="site-mobile-link"
            >
              <span className="editorial-label">
                0{index + 1}
              </span>
              {item.label}
              <ArrowUpRight
                size={20}
                aria-hidden="true"
              />
            </Link>
          ))}

          <Link
            href="/#contact"
            onClick={closeMenu}
            className="site-mobile-contact"
          >
            Start a conversation
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
