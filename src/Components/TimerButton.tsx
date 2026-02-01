import { getTime } from "../Utility/utils";
import { SessionContext } from "../Contexts/SessionContext";
import { useContext } from "react";
import ThemeButton from "./ThemeButton";

interface TimerButtonProps {
    value: number;
}

export default function TimerButton({ value }: TimerButtonProps) {
    const { setLastRest, setCurrentScene } = useContext(SessionContext).data;

    return (
        <ThemeButton
            type="button"
            onClick={() => {
                setLastRest(value);
                setCurrentScene("resting");
            }}
            className="TimerButton"
        >
            {getTime(value)}
        </ThemeButton>
    );
}
