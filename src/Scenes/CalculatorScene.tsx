import Scene from "./Scene";
import MainHeading from "../Components/MainHeading";
import ThemeButton from "../Components/ThemeButton";
import { SessionContext } from "../Contexts/SessionContext";
import { PlateList, PlateSpec } from "../Data/PlateData";
import { useContext, useState } from "react";
import "../Stylings/CalculatorScene.css";

export default function CalculatorScene() {
    const { setPlateList, setCurrentScene } = useContext(SessionContext).data;
    const [targetWeight, setTargetWeight] = useState("");
    const sys = useContext(SessionContext).settings.weightSystem;
    const plates = PlateList[sys].plates;
    const plateMinimum = plates[0].weight * 2;
    const barWeight = PlateList[sys].barWeight;

    function updateTargetWeight(evt: React.ChangeEvent<HTMLInputElement>) {
        setTargetWeight(evt.target.value);
    }

    function getBarMinimum(): number {
        return barWeight + plateMinimum;
    }

    function compareWeight(solvingWeight: number): PlateSpec {
        for (let index = 1; index < plates.length; index++) {
            if (plates[index].weight > solvingWeight) {
                return plates[index - 1];
            }
        }
        return plates[plates.length - 1];
    }

    function calculateWeightList(totalWeight: number) {
        // For now this is fine, it would be better to put this in a state thing
        // in order to put verification directly in the input form

        if (totalWeight < getBarMinimum()) {
            alert(`Please input more than ${getBarMinimum()}`);
            return;
        }

        if ((totalWeight - barWeight) % plateMinimum > 0) {
            alert(`Weight must be divisible by ${plateMinimum}`);
            return;
        }

        // Define blank variables and remove bar weight
        let newPlateList = [];
        totalWeight -= barWeight;
        totalWeight = totalWeight / 2;

        // Add plates till you hit 0
        while (totalWeight > 0) {
            let newPlate = compareWeight(totalWeight);
            totalWeight -= newPlate.weight;
            newPlateList.push(newPlate);
        }
        setPlateList(newPlateList);
        setCurrentScene("main");
    }

    return (
        <Scene id="CalculatorScene" classNames="container">
            <MainHeading heading="Whachu Lift?" classes="stylized" />
            <form
                className="container"
                action=""
                id="FindWeightForm"
                onSubmit={(evt) => {
                    evt.preventDefault();
                    calculateWeightList(Number(targetWeight));
                }}
            >
                <input
                    inputMode="numeric"
                    type="number"
                    name="findWeight"
                    id="findWeight"
                    min={getBarMinimum()}
                    onChange={updateTargetWeight}
                    value={targetWeight}
                    placeholder={`>${getBarMinimum()} ${sys}`}
                    step=".1"
                />
                <ThemeButton type="submit">Calculate</ThemeButton>
            </form>
        </Scene>
    );
}
