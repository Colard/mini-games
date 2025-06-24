import { Link } from "react-router";
import { HEADER_LINKS } from "../constants";
import clsx from "clsx";

let Header: React.FC = ({ ...rest }) => {
  return (
    <header className="flex h-10 bg-black" {...rest}>
      {HEADER_LINKS.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className={clsx("group flex-1 text-white")}
        >
          <div
            className={clsx(
              "relative flex size-full items-center justify-center",
              "before:absolute before:top-1/2 before:right-0 before:h-[calc(100%-5px)] before:w-0.25 before:-translate-y-1/2 before:bg-white",
              "group-last:before:hidden",
            )}
          >
            <p>{link.name}</p>

            <div className="absolute h-[calc(100%-5px)] w-full">
              <span
                className={clsx(
                  "pointer-events-none absolute inset-0 flex items-center justify-center",
                  "bg-white text-black transition-all duration-600 ease-out",
                  "clip-left-full group-hover:clip-none",
                  "group-active:clip-none",
                  "group-first:hidden group-last:duration-300",
                )}
              >
                {link.name}
              </span>

              <span
                className={clsx(
                  "pointer-events-none absolute inset-0 flex items-center justify-center",
                  "bg-white text-black transition-all duration-600 ease-out",
                  "clip-right-full group-hover:clip-none",
                  "group-active:clip-none",
                  "group-first:duration-300 group-last:hidden",
                )}
              >
                {link.name}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </header>
  );
};

export default Header;
