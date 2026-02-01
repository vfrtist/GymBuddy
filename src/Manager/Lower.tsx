import PlateButtons from "../Components/PlateButtons";
import "../Stylings/Plates.css";
import "../Stylings/Lower.css";
import { SessionContext } from "../Contexts/SessionContext";
import { useContext } from "react";

export default function Lower() {
    const weightSystem = useContext(SessionContext).settings.weightSystem;

    return (
        <div id="Lower" className="container">
            <PlateButtons unit={weightSystem} />
        </div>
    );
}
