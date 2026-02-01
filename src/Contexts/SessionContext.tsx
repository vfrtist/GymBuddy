import { createContext } from "react";
import { PlateSpec, WeightSystem } from "../Data/PlateData";
import { SceneKey } from "../Data/SceneList";

// Storage for session data which lives at the app level

export interface SessionData {
    settings: {
        mode: string;
        weightSystem: WeightSystem;
        visuals: string;
        showTimer: string;
        setMode: Function;
        setWeightSystem: Function;
        setVisuals: Function;
        setShowTimer: Function;
    };
    data: {
        plateList: PlateSpec[];
        lastRest: number;
        currentScene: SceneKey;
        setPlateList: Function;
        setLastRest: Function;
        setCurrentScene: Function;
    };
}

export const SessionContext = createContext<SessionData>({
    settings: {
        weightSystem: "lbs",
        mode: "light",
        visuals: "detailed",
        showTimer: "on",
        setMode: () => { },
        setWeightSystem: () => { },
        setVisuals: () => { },
        setShowTimer: () => { },
    },
    data: {
        plateList: [],
        lastRest: 0,
        currentScene: "main",
        setPlateList: () => { },
        setLastRest: () => { },
        setCurrentScene: () => { },
    },
});
