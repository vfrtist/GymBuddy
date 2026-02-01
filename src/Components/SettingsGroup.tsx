import React from "react";
import "../Stylings/SettingsGroup.css";
import { SettingsButtonProps } from "./SettingsButton";

export interface SettingsGroupProp {
    name: string;
    children: React.ReactElement<SettingsButtonProps>[];
    activeValue: any;
    onChange?: (value: any) => void;
}

export default function SettingsGroup({
    name,
    children,
    activeValue,
    onChange,
}: SettingsGroupProp) {
    // if no active value is given, take the first active value
    return (
        <div className="SettingsGroup container">
            <h3>{name}</h3>
            <div className="ButtonGroup">
                {children.map((child) =>
                    React.cloneElement(child, {
                        key: child.props.value,
                        isActive: child.props.value === activeValue,
                        onClick: onChange,
                    })
                )}
            </div>
        </div>
    );
}
