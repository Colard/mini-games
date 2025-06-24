import clsx from "clsx";
import { Link } from "react-router-dom";

interface HeaderButtonProps
  extends Omit<React.ComponentPropsWithoutRef<"a">, "children"> {
  text: string;
}

let HeaderButton: React.FC<HeaderButtonProps> = ({
  className = "",
  href,
  text,
  ...rest
}) => {
  return (
    <Link
      to={href || "#"}
      className={clsx(
        className,
        "group relative",
        "before:absolute before:top-1/2 before:right-0 before:h-[calc(100%-5px)] before:w-0.25 before:-translate-y-1/2 before:bg-white",
        "last:before:hidden",
      )}
      {...rest}
    >
      <div
        className={clsx(
          "flex size-full items-center justify-center text-white",
        )}
      >
        <p>{text}</p>

        <div className="absolute h-[calc(100%-5px)] w-full">
          <ButtonMask text={text} />
          <ButtonMask text={text} isLeft />
        </div>
      </div>
    </Link>
  );
};

interface ButtonMaskProps {
  text: string;
  isLeft?: boolean;
}

let ButtonMask: React.FC<ButtonMaskProps> = ({ text, isLeft = false }) => {
  return (
    <span
      className={clsx(
        "pointer-events-none absolute inset-0 flex items-center justify-center",
        "bg-white text-black transition-all duration-600 ease-out",
        isLeft && "clip-left-full group-first:hidden group-last:duration-300",
        !isLeft && "clip-right-full group-first:duration-300 group-last:hidden",
        "group-hover:clip-none",
        "group-active:clip-none",
      )}
    >
      {text}
    </span>
  );
};

export default HeaderButton;
