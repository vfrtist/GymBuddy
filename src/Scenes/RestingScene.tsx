import Scene from "./Scene";
import { getTime } from "../Utility/utils";
import { useContext } from "react";
import { SessionContext } from "../Contexts/SessionContext";
import { CountdownCircleTimer, TimeProps } from "react-countdown-circle-timer";
import "../Stylings/RestingScene.css";

export default function RestingScene() {
    const { lastRest, setCurrentScene } = useContext(SessionContext).data;
    const { showTimer } = useContext(SessionContext).settings;

    function endCountdown() {
        setCurrentScene("endResting");
    }

    const renderWithTime = ({ remainingTime }: TimeProps) => (
        <>
            {showTimer == "on" && <h1 className="clock">{getTime(remainingTime)}</h1>}
            <button id="cancel" type="button" onClick={endCountdown}>
                X
            </button>
        </>
    );

    return (
        <Scene classNames="container" id={"RestingScene"}>
            <CountdownCircleTimer
                isPlaying
                duration={lastRest}
                colors={["#f02b5c", "#ecc1ae"]}
                colorsTime={[lastRest, 0]}
                onComplete={endCountdown}
                children={renderWithTime}
            />
        </Scene>
    );
}
