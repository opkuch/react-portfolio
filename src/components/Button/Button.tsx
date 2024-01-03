import { ReactElement } from "react";

const Button: React.FC<{children: ReactElement}> = ({children}) => {
  return (
    <button><span>{children}</span><i></i></button>
    );
};

export default Button;
