// ...existing code...
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navLinkClass = "block px-3 py-2 rounded-md text-primary font-medium";
  return (
    <header className="sticky top-0 z-40 bg-orange-600 border-b border-red-500">
      <div className="max-w-screen mx-auto flex items-center justify-between px-4 py-3">
        {/* logo + title */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="../../public/GHB Logo.png"
            alt="GHB Logo"
            className="w-10 h-10 object-contain sm:w-12 sm:h-12"
          />
          <span className="font-bold text-lg md:text-xl leading-tight">
            <span className="hidden md:inline">Government</span>
            <span className="hidden md:inline"> Housing Bank</span>
            <span className="md:hidden">GHB</span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `underline ${navLinkClass}` : navLinkClass
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `underline ${navLinkClass}` : navLinkClass
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="p-2 rounded-md bg-white/90 hover:bg-white transition"
          >
            <svg
              className="w-6 h-6 text-orange-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {open ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu (collapsible) */}
      <nav
        id="mobile-menu"
        className={`md:hidden bg-orange-600 border-t border-orange-500 overflow-hidden transition-max-h duration-200 ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          <li>
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md bg-orange-500 text-white"
                  : "block px-3 py-2 rounded-md text-white/95 hover:bg-white/10"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lottery"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md bg-orange-500 text-white"
                  : "block px-3 py-2 rounded-md text-white/95 hover:bg-white/10"
              }
            >
              Lottery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md bg-orange-500 text-white"
                  : "block px-3 py-2 rounded-md text-white/95 hover:bg-white/10"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md bg-orange-500 text-white"
                  : "block px-3 py-2 rounded-md text-white/95 hover:bg-white/10"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
// ...existing code...
