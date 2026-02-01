import "../Stylings/ThemeButton.css";
import { ButtonProps } from "../Utility/Generics";

export default function ThemeButton({ children, ...buttonProps }: ButtonProps) {
    return (
        <button {...buttonProps} className={`ThemeButton ${buttonProps.className}`}>
            {children}
        </button>
    );
}
