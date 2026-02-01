import Icon from "./Icon";
import { IconKey } from "../Data/IconList";
import { ButtonProps } from "../Utility/Generics";
import { useContext } from "react";
import { SessionContext } from "../Contexts/SessionContext";

interface MenuButtonProps extends ButtonProps {
    icon: IconKey;
}

export default function MenuButton({
    icon,
    caption,
    ...buttonProps
}: MenuButtonProps) {
    const { visuals } = useContext(SessionContext).settings;

    return (
        <button
            onClick={buttonProps.onClick}
            aria-label={buttonProps["aria-label"]}
            className={`MenuButton ${buttonProps.className}`}
            type="button"
            id={`${icon}button`}
            name={icon}
        >
            <Icon iconKey={icon} />

            {visuals == "detailed" && <label htmlFor={icon}>{caption}</label>}
        </button>
    );
}
