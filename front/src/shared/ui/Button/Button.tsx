import clsx from "clsx";
import styles from "./Button.module.css";
import { CSSProperties, ReactNode } from "react";

type Props = {
    variant?: "ghost" | "primary" | "outline";
    style?: CSSProperties;
    children: ReactNode;
    onClick?: () => void;
    type?: "submit" | "button";
    className?: string;
    disabled?: boolean;
};

export const Button = ({
    children,
    onClick,
    style,
    className,
    type = "button",
    variant = "ghost",
    disabled = false,
}: Props) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                styles.customButton,
                variant === "ghost" && styles.ghost,
                variant === "primary" && styles.primary,
                variant === "outline" && styles.outline,
                disabled && styles.disabled,
                className,
            )}
            style={style}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
