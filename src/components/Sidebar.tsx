import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const sideLinkClass =
    "block px-3 py-2 rounded-md text-white hover:bg-orange-500 transition";
  return (
    // hidden on small screens, visible and fixed on md+
    <aside className="hidden md:block fixed top-16 left-0 w-64 h-screen bg-[#ffa73b] p-4 overflow-auto z-20">
      <div className="mb-4 flex items-center justify-center bg-red-600 p-2 rounded-md">
        <h2 className="text-lg font-semibold text-white">เมนู</h2>
      </div>

      <div className="my-2 border-b border-black/40"></div>

      <nav>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `bg-orange-500 ${sideLinkClass}` : sideLinkClass
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lottery"
              className={({ isActive }) =>
                isActive ? `bg-orange-500 ${sideLinkClass}` : sideLinkClass
              }
            >
              Lottery
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mt-6 text-sm text-white/90">
        © Government Housing Bank
      </div>
    </aside>
  );
}
