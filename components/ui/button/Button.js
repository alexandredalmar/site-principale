import Link from "next/link";
import React from "react";

const Button = (props) => {
  const baseStyle = "btn";
  const styleMap = {
    primary: "bg-button-primary text-white hover:bg-button-primary-hover",
    secondary: "bg-button-secondary text-white hover:bg-button-secondary-hover",
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
