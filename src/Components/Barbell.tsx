import BarbellEnd from "./BarbellEnd";
import { useContext } from "react";
import { SessionContext } from "../Contexts/SessionContext";
import "../Stylings/Barbell.css";

export default function Barbell() {
    const { plateList } = useContext(SessionContext).data;
    return (
        <div id="Barbell" className="container bar">
            <BarbellEnd barside="left" plateList={plateList} />
            <div className="middle"></div>
            <BarbellEnd barside="right" plateList={plateList} />
        </div>
    );
}
