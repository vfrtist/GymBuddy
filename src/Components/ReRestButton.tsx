import Icon from "./Icon";
import { SessionContext } from "../Contexts/SessionContext";
import { getTime } from "../Utility/utils";
import { useContext } from "react";
import "../Stylings/ReRestButton.css";

export default function ReRestButton() {
    const restTime = useContext(SessionContext).data.lastRest;
    const { setCurrentScene } = useContext(SessionContext).data;
    const display = getTime(restTime);

    if (restTime > 0) {
        return (
            <button
                onClick={() => setCurrentScene("resting")}
                type="button"
                className="container"
                id="ReRest"
            >
                <div className="MenuButton">
                    <Icon iconKey="reRest" />
                </div>
                <span>{display}</span>
            </button>
        );
    }
    return <> </>;
}
