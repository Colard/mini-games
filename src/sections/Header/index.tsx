import { HEADER_LINKS } from "../../constants";
import HeaderButton from "./HeaderButton";

let Header: React.FC = ({ ...rest }) => {
  return (
    <header className="flex h-10 bg-black" {...rest}>
      {HEADER_LINKS.map((link) => (
        <HeaderButton
          key={link.name}
          text={link.name}
          href={link.href}
          className="flex-1"
        />
      ))}
    </header>
  );
};

export default Header;
