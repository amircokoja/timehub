import React from "react";
import {
  baseStyles,
  getButtonStyles,
  ButtonColor,
  ButtonVariant,
  getSizeStyles,
} from "./button-styles";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  text?: string;
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: "xs" | "sm" | "md" | "lg";
  icon?: React.ReactNode;
  additionalClasses?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color = "blue",
  variant = "solid",
  size = "md",
  icon,
  additionalClasses,
  ...props
}) => {
  const hasText = !!text;
  const buttonClass = `${baseStyles} ${getButtonStyles(color, variant)} ${getSizeStyles(size, hasText)} ${additionalClasses}`;

  return (
    <button className={buttonClass} {...props}>
      {icon && <span className={hasText ? "mr-2" : ""}>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
