"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/common.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "action";
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  style,
  type = "button",
}) => {
  const buttonClasses = `
    ${styles.button} 
    ${variant === "primary" ? styles.primaryButton : ""} 
    ${variant === "secondary" ? styles.secondaryButton : ""}
    ${variant === "action" ? styles.actionButton : ""}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={buttonClasses} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
