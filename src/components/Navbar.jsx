import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="#" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          Velvet Pour
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
