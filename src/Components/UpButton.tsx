type UpButtonProps = {
    upFunction: () => void;
    returnFunction: () => void;
};

export default function UpButton({
    upFunction,
    returnFunction,
}: UpButtonProps) {
    return (
        <button
            onClick={() => {
                returnFunction();
                upFunction();
            }}
            aria-label="Open Weights Tray"
            className="MenuButton"
            type="button"
            id="UpButton"
        >
            <div id="Center"></div>
        </button>
    );
}
