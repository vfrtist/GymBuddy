import { toTitleCase } from "../Utility/utils";

export interface SettingsButtonProps {
    value: string;
    caption: string;
    isActive?: boolean;
    onClick?: (value: string) => void;
}

export default function SettingsButton({
    value,
    caption,
    isActive,
    onClick,
}: SettingsButtonProps) {
    return (
        <button
            key={value}
            className={`SettingsButton ${isActive ? "active" : ""}`}
            onClick={() => onClick?.(value)}
            value={value}
        >
            {toTitleCase(caption)}
        </button>
    );
}
