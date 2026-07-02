import dayjs from "dayjs";

import { navIcons, navLinks } from "#constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="apple-logo" />
        <p className="font-bold">Anass Lazaar's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img, alt }) => (
            <li key={id}>
              <img className="icon-hover" src={img} alt={alt} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMMM DD h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
