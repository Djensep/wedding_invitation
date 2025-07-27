"use client";

import { ChangeEvent, CSSProperties, forwardRef, KeyboardEvent, useState } from "react";
import styles from "./Input.module.css";

type Props = {
    label?: string;
    name: string;
    type?: "text" | "email" | "number" | "date";
    placeholder?: string;
    style?: CSSProperties;
    disabled?: boolean;
    showIcon?: boolean;
    error?: string;
    value?: string;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = forwardRef<HTMLInputElement, Props>(
    (
        {
            label,
            name,
            value,
            placeholder,
            style,
            disabled = false,
            type = "text",
            showIcon = false,
            error,
            onKeyDown,
            onChange,
            ...rest
        },
        ref,
    ) => {
        const [isVisible, setIsVisible] = useState<boolean>(false);

        return (
            <div className={styles.inputContainer} style={style}>
                {label && (
                    <label htmlFor={name} className={styles.label}>
                        {label}
                    </label>
                )}
                {error && <p className={styles.errorText}>{error}</p>}
                <div className={styles.inputWrapper}>
                    <input
                        id={name}
                        name={name}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        disabled={disabled}
                        ref={ref}
                        className={`${styles.input} ${error ? styles.inputError : ""}`}
                        style={{ paddingRight: showIcon ? "40px" : undefined }}
                        {...rest}
                    />
                </div>
            </div>
        );
    },
);

Input.displayName = "Input";
