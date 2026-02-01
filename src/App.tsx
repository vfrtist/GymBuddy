import "./Stylings/colors.css";
import "./Stylings/animations.css";
import "./Stylings/styles.css";

import Upper from "./Manager/Upper";
import Lower from "./Manager/Lower";
import MenuButtons from "./Components/MenuButtons";
import { PlateSpec, WeightSystem } from "./Data/PlateData";
import { SceneKey } from "./Data/SceneList";
import { useState, useEffect } from "react";
import { SessionContext } from "./Contexts/SessionContext";
import { setAttribute } from "./Utility/utils";
import { loadUserSettings, saveUserSettings } from "./Utility/User";

export default function App() {
    // Default Settings
    const [userSettings] = useState(() => loadUserSettings());
    const [currentWeight, setWeightSystem] = useState<WeightSystem>("lbs");
    const [currentMode, setMode] = useState("light");
    const [currentVisuals, setCurrentVisuals] = useState("detailed");
    const [currentTimer, setCurrentTimer] = useState("on");

    // First mount application
    useEffect(() => {
        setMode(userSettings.mode);
        setAttribute("mode", userSettings.mode);
        setWeightSystem(userSettings.weightSystem);
        setCurrentVisuals(userSettings.visuals);
        setCurrentTimer(userSettings.showTimer);
    }, []);

    // Session Settings, which are cleared every time.
    const [plateList, setPlateList] = useState<PlateSpec[]>([]);
    const [restTime, setRestTime] = useState(0);
    const [scene, changeScene] = useState<SceneKey>("main");

    function changeWeightSystem(value: WeightSystem) {
        setPlateList([]);
        setWeightSystem(value);
        saveUserSettings({ ...userSettings, weightSystem: value });
    }

    function changeMode(value: string) {
        setMode(value);
        setAttribute("mode", value);
        saveUserSettings({ ...userSettings, mode: value });
    }

    function changeVisuals(value: string) {
        setCurrentVisuals(value);
        saveUserSettings({ ...userSettings, visuals: value });
    }

    function changeTimer(value: string) {
        setCurrentTimer(value);
        saveUserSettings({ ...userSettings, showTimer: value });
    }

    function updateRestTime(newTime: number) {
        setRestTime(newTime);
    }

    function updatePlateList(newPlateList: PlateSpec[]) {
        setPlateList([...newPlateList]);
    }

    function updateScene(newScene: SceneKey) {
        const nextScene = newScene === scene ? "main" : newScene;
        changeScene(nextScene);
    }

    return (
        <div className="App">
            <main>
                <SessionContext.Provider
                    value={{
                        settings: {
                            mode: currentMode,
                            weightSystem: currentWeight,
                            visuals: currentVisuals,
                            showTimer: currentTimer,
                            setMode: changeMode,
                            setWeightSystem: changeWeightSystem,
                            setVisuals: changeVisuals,
                            setShowTimer: changeTimer,
                        },
                        data: {
                            plateList: plateList,
                            lastRest: restTime,
                            currentScene: scene,
                            setPlateList: updatePlateList,
                            setLastRest: updateRestTime,
                            setCurrentScene: updateScene,
                        },
                    }}
                >
                    <Upper />
                    <Lower />
                    <MenuButtons />
                </SessionContext.Provider>
            </main>
        </div>
    );
}
