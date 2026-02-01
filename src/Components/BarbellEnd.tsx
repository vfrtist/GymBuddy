import Plate from "./Plate";
import { PlateSpec } from "../Data/PlateData";
import { useContext } from "react";
import { SessionContext } from "../Contexts/SessionContext";

export type Barside = "left" | "right";

interface BarbellEndProps {
    barside: Barside;
    plateList: PlateSpec[];
}

export default function BarbellEnd({ barside, plateList }: BarbellEndProps) {
    const { setPlateList } = useContext(SessionContext).data;

    return (
        <div className={`BarbellEnd ${barside}`}>
            <div className="cap"></div>
            {plateList.map((plate, index) => {
                const key = `${barside}${index}`;
                return (
                    <Plate
                        {...plate}
                        key={key}
                        click={() => {
                            setPlateList(plateList.slice(0, index));
                        }}
                    />
                );
            })}
        </div>
    );
}
