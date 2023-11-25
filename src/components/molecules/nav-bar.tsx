import { NavLink } from "../atoms/nav-link";

const navItems = [
  { title: "Home", url: "/" },
  { title: "Shop", url: "/shop" },
  { title: "About Us", url: "/about-us" },
  { title: "Contact Us", url: "/contact" },
];

export function NavBar() {
  return (
    <ul className="flex flex-1 list-none">
      {navItems.map(({ title, url }) => (
        <NavLink key={url} href={url}>
          {title}
        </NavLink>
      ))}
    </ul>
  );
}
