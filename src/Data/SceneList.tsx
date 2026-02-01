import MainScene from "../Scenes/MainScene";
import TimerScene from "../Scenes/TimerScene";
import CalculatorScene from "../Scenes/CalculatorScene";
import RestingScene from "../Scenes/RestingScene";
import SettingsScene from "../Scenes/SettingsScene";
import EndRestingScene from "../Scenes/EndRestingScene";
import { ComponentType } from "react";

export type SceneKey =
    | "main"
    | "timer"
    | "calculator"
    | "resting"
    | "settings"
    | "endResting";

export const SceneList: Record<SceneKey, ComponentType> = {
    main: MainScene,
    timer: TimerScene,
    calculator: CalculatorScene,
    resting: RestingScene,
    settings: SettingsScene,
    endResting: EndRestingScene,
};
