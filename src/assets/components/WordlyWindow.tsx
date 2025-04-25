interface WordlyWindowProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {}

let WordlyWindow: React.FC<WordlyWindowProps> = ({ className, ...rest }) => {
  return <div className={`my-class ${className || ""}`} {...rest}></div>;
};

export default WordlyWindow;
