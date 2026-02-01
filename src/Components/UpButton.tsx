type UpButtonProps = {
    upFunction: () => void;
};

export default function UpButton({
    upFunction,
}: UpButtonProps) {
    return (
        <button
            onClick={() => {
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
