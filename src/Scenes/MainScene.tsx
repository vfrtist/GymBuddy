import Scene from "./Scene";
import MainHeading from "../Components/MainHeading";
import Barbell from "../Components/Barbell";
import ReRestButton from "../Components/ReRestButton";
import { PlateList } from "../Data/PlateData";
import { useContext } from "react";
import { SessionContext } from "../Contexts/SessionContext";
import { getConvertedWeight } from "../Utility/utils";
import "../Stylings/MainScene.css";

export default function MainScene() {
    const { plateList } = useContext(SessionContext).data;
    const sys = useContext(SessionContext).settings.weightSystem;
    const weightList = plateList.map((item) => item.weight).join(" / ");
    const barWeight = sys ? PlateList[sys].barWeight : PlateList["lbs"].barWeight;

    function totalWeight() {
        const plateWeight = plateList.reduce(
            (accumulator, currentValue) => accumulator + currentValue.weight,
            0
        );
        return 2 * plateWeight + barWeight;
    }

    return (
        <Scene classNames="container" id={"MainScene"}>
            <MainHeading
                classes={totalWeight() > barWeight ? "" : "stylized"}
                heading={
                    totalWeight() > barWeight
                        ? `${totalWeight()} ${sys}`
                        : "Ready to Lift"
                }
                subheading={weightList}
                superheading={
                    totalWeight() > barWeight
                        ? getConvertedWeight(totalWeight(), sys)
                        : ""
                }
            />

            <Barbell />

            <ReRestButton />
        </Scene>
    );
}
