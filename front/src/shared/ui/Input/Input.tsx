"use client";

import { ChangeEvent, CSSProperties, forwardRef, KeyboardEvent, ReactNode } from "react";
import styles from "./Input.module.css";

type Props = {
    label?: string;
    name: string;
    type?: "text" | "email" | "number" | "date" | "radio" | "range";
    placeholder?: string;
    style?: CSSProperties;
    disabled?: boolean;
    showIcon?: boolean;
    error?: string;
    value?: string;
    checked?: boolean;
    range?: { min: number; max: number };
    step?: number;
    children?: ReactNode;
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
            checked,
            step,
            children,
            range,
            onKeyDown,
            onChange,
            ...rest
        },
        ref,
    ) => {
        const isRadio = type === "radio";
        const isRange = type === "range";

        return (
            <div className={styles.inputContainer} style={style}>
                {label && !isRadio && (
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
                        checked={isRadio ? checked : undefined}
                        className={`${styles.input} ${error ? styles.inputError : ""} ${isRadio ? styles.radio : ""}`}
                        style={{
                            paddingRight: showIcon ? "40px" : undefined,
                        }}
                        min={range?.min || 0}
                        max={range?.max || 0}
                        step={isRange ? step : undefined}
                        {...rest}
                    />
                    {isRadio && (
                        <label htmlFor={name} style={{ marginLeft: "8px", cursor: "pointer" }}>
                            {children}
                        </label>
                    )}
                </div>

                {isRange && value && <div className={styles.rangeValue}>Текущее значение: {value}</div>}
            </div>
        );
    },
);

Input.displayName = "Input";
