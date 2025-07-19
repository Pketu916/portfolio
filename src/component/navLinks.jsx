// components/NavLinks.jsx
import { NavLink } from "react-router-dom";

const NavLinks = ({ navItems, isMobile, handleNavClick }) => {
  return (
    <>
      {navItems.map((item, i) => {
        const isScrollLink = item.path === "/" && item.id;
        const content =
          isScrollLink || item.name === "Contact" ? (
            <a
              key={i}
              href={`#${item.id || "footer"}`}
              onClick={() => handleNavClick?.(item)}
              className="text-gray-300 hover:text-cyan-300 transition"
            >
              {item.name}
            </a>
          ) : (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => handleNavClick?.(item)}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  : "text-gray-300 hover:text-cyan-300 transition"
              }
            >
              {item.name}
            </NavLink>
          );

        return isMobile ? (
          <div
            key={i}
            className="hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer"
          >
            {content}
          </div>
        ) : (
          <div key={i}>{content}</div>
        );
      })}
    </>
  );
};

export default NavLinks;
