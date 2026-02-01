import Scene from "./Scene";
import SettingsButton from "../Components/SettingsButton";
import SettingsGroup from "../Components/SettingsGroup";
import Icon from "../Components/Icon";
import { useContext } from "react";
import { SessionContext } from "../Contexts/SessionContext";
import "../Stylings/SettingsScene.css";

export default function SettingsScene() {
    const { ...settings } = useContext(SessionContext).settings;

    return (
        <Scene id={"SettingsScene"}>
            <section className="container">
                <header className="container">
                    <Icon iconKey="dumbbell" />
                    <h2>Equipment</h2>
                </header>

                <SettingsGroup
                    name="Unit"
                    activeValue={settings.weightSystem}
                    onChange={settings.setWeightSystem}
                >
                    <SettingsButton value="lbs" caption="Imperial" />
                    <SettingsButton value="kg" caption="Metric" />
                </SettingsGroup>
            </section>

            <section className="container">
                <header className="container">
                    <Icon iconKey="theme" />
                    <h2>Theme</h2>
                </header>

                <SettingsGroup
                    name="Mode"
                    activeValue={settings.mode}
                    onChange={settings.setMode}
                >
                    <SettingsButton value="light" caption="Light" />
                    <SettingsButton value="dark" caption="Dark" />
                </SettingsGroup>

                <SettingsGroup
                    name="Visuals"
                    activeValue={settings.visuals}
                    onChange={settings.setVisuals}
                >
                    <SettingsButton value="minimal" caption="Minimal" />
                    <SettingsButton value="detailed" caption="Detailed" />
                </SettingsGroup>

                <SettingsGroup
                    name="Timer"
                    activeValue={settings.showTimer.toString()}
                    onChange={settings.setShowTimer}
                >
                    <SettingsButton value="on" caption="on" />
                    <SettingsButton value="off" caption="off" />
                </SettingsGroup>
            </section>
        </Scene>
    );
}
