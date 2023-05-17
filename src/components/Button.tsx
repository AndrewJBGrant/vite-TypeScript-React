// import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, MouseEventHandler } from "react";

// const Button: React.FC<{title: string; activeClass: string; onSubmit: () => void}> = (props) => {
//   return(
//     <button className={props.activeClass} onClick={props.onSubmit}>
//       {props.title}
//     </button>
// )};

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  color?: "primary" | "secondary"; // two styling options
  disabled?: boolean; // make the button disabled or not
};

export const Button = ({
  onClick,
  children,
  color = "primary",
  disabled,
}: ButtonProps) => {
  return (
    <button onClick={onClick} color={color} disabled={disabled}>
      {children}
    </button>
  );
};


export default Button;


//Will come back for you button!!!! 😭
