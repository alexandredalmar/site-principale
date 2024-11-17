import Link from "next/link";
import React from "react";

const Button = (props) => {
  const baseStyle = "btn";
  const styleMap = {
    primary:
      " border-black rounded-none uppercase text-black bg-transparent hover:bg-transparent hover:border-black  dark:text-white ",
    secondary:
      " border-x-0 border-t-0 p-0  border-b-2   border-black  rounded-none uppercase text-black bg-transparent hover:bg-transparent hover:border-black  dark:text-white",
    danger:
      "bg-button-danger text-button-danger text-white hover:bg-button-danger-hover",
  };
  const buttonStyle = `${baseStyle} ${styleMap[props.styleType]} || styledMap.primary}`;
  return (
    <Link className={buttonStyle} href={props.link}>
      {props.text}
    </Link>
  );
};

export default Button;
