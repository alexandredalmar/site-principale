import Link from "next/link";
import React from "react";

const Button = (props) => {
  const baseStyle = "btn";
  const styleMap = {
    primary:
      " text-md rounded-lg border-2 border-pink-500 bg-transparent px-4 py-2 uppercase text-pink-500 hover:bg-pink-500 hover:text-white dark:text-white hover:border-pink-500 hover:shadow-[0_0_0px_#fff,inset_0_0_0px_#fff,0_0_2px_#e74694,0_0_10px_#e74694,0_0_10px_#e74694]",
    secondary:
      "text-md rounded-lg border-2 border-sky-500 bg-transparent px-4 py-2 uppercase text-sky-500 hover:bg-sky-500 hover:text-white dark:text-white hover:border-sky-500 hover:shadow-[0_0_0px_#fff,inset_0_0_0px_#fff,0_0_2px_#08f,0_0_10px_#08f,0_0_10px_#08f]",
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
