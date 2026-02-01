import { WeightSystem } from "../Data/PlateData";

export const USER_SETTINGS_KEY = "userSettings";

export interface UserData {
    mode: string;
    visuals: string;
    weightSystem: WeightSystem;
    showTimer: string;
}

export function loadUserSettings(): UserData {
    const defaults: UserData = {
        weightSystem: "lbs",
        mode: "light",
        visuals: "default",
        showTimer: "on",
    };
    try {
        const raw = localStorage.getItem("userSettings");
        if (!raw) return defaults;

        const parsed = JSON.parse(raw);
        return { ...defaults, ...parsed };
    } catch {
        return defaults;
    }
}

export function saveUserSettings(settings: UserData) {
    localStorage.setItem(USER_SETTINGS_KEY, JSON.stringify(settings));
}
