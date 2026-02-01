import { SceneList } from "../Data/SceneList";
import { useState, useContext } from "react";
import { SessionContext } from "../Contexts/SessionContext";
import UpButton from "../Components/UpButton";
import "../Stylings/Upper.css";

export default function Upper() {
    // Scene and Scene updating
    const { currentScene, setCurrentScene } = useContext(SessionContext).data;

    // Opening and Open updating
    const [isOpen, changeIsOpen] = useState(false);

    function toggleOpen() {
        changeIsOpen((prev) => !prev);
    }

    const SceneComponent = SceneList[currentScene];
    return (
        <div className={`container upper${isOpen ? " open" : ""}`} id="Upper">
            <div id="SceneWrapper">
                <SceneComponent />
            </div>
            <UpButton
                upFunction={toggleOpen}
            />
        </div>
    );
}
