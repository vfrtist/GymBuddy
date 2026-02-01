import Plate from "./Plate";
import { PlateSpec } from "../Data/PlateData";
import { useContext } from "react";
import { SessionContext } from "../Contexts/SessionContext";

interface PlateButtonProps {
    plate: PlateSpec;
}

export default function PlateButton({ plate }: PlateButtonProps) {
    const { plateList, setPlateList } = useContext(SessionContext).data;

    return (
        <div
            className="PlateButton"
            onClick={() => {
                setPlateList([...plateList, plate]);
            }}
        >
            <Plate width={plate.width} height={plate.height} />
            <div className="caption">{plate.weight}</div>
        </div>
    );
}
