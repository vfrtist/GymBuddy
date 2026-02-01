export interface PlateProps {
    width: number;
    height: number;
    animationDelay?: string;
    click?: () => void;
}

export default function Plate({ width, height, click }: PlateProps) {
    return (
        <div onClick={click} className="Plate" style={{ width, height }}></div>
    );
}
