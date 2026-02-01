// import { menuButtonsData } from "../Data/MenuButtonData";
import MenuButton from "./MenuButton";
import "../Stylings/MenuButtons.css";
import { useContext } from "react";
import { SessionContext } from "../Contexts/SessionContext";

export default function MenuButtons() {
    const { currentScene, setCurrentScene } = useContext(SessionContext).data;

    return (
        <div className="MenuButtons">
            <MenuButton
                icon="home"
                className={
                    new Set(["main", "resting", "endResting"]).has(currentScene)
                        ? "active"
                        : ""
                }
                onClick={() => setCurrentScene("main")}
                caption="Home"
                aria-label={"Go Home"}
            />
            <MenuButton
                icon="rest"
                className={currentScene === "timer" ? "active" : ""}
                onClick={() => setCurrentScene("timer")}
                caption="Rest"
                aria-label="Open Rest Page"
            />
            <div className="MenuButton"></div>
            <MenuButton
                icon="calculate"
                className={currentScene === "calculator" ? "active" : ""}
                onClick={() => setCurrentScene("calculator")}
                caption="Calculate"
                aria-label="Open Calculator"
            />
            <MenuButton
                icon="settings"
                className={currentScene === "settings" ? "active" : ""}
                onClick={() => {
                    setCurrentScene("settings");
                }}
                caption="Settings"
                aria-label="Open Calculator"
            />
        </div>
    );
}
