import { PlateList, WeightSystem } from "../Data/PlateData";
import PlateButton from "./PlateButton";

interface PlateButtonsProps {
    unit: WeightSystem;
}

export default function PlateButtons({ unit }: PlateButtonsProps) {
    return (
        <>
            {PlateList[unit].plates.map((plate) => (
                <PlateButton key={plate.weight} plate={plate} />
            ))}
        </>
    );
}
