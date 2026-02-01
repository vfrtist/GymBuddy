import Scene from "./Scene";
import TimerButtons from "../Components/TimerButtons";
import "../Stylings/TimerScene.css";

export default function TimerScene() {
    return (
        <Scene id={"TimerScene"}>
            <TimerButtons />
        </Scene>
    );
}
