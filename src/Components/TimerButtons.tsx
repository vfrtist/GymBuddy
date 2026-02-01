import TimerButton from "./TimerButton";

export default function TimerButtons() {
    return (
        <div id="TimerButtons">
            <TimerButton value={45} />
            <TimerButton value={55} />
            <TimerButton value={70} />
            <TimerButton value={90} />
            <TimerButton value={120} />
            <TimerButton value={180} />
        </div>
    );
}
