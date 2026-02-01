import { WeightSystem } from "../Data/PlateData";

export function getTime(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    const remainder = seconds < 10 ? `0${seconds}` : seconds;
    if (totalSeconds < 60) {
        return `:${remainder}`;
    }
    return `${minutes}:${remainder}`;
}

export const delay = (milliseconds: number) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

export function toTitleCase(str: string) {
    return str
        .toLowerCase() // Convert the entire string to lowercase first
        .split(" ") // Split the string into an array of words
        .map((word) => {
            // Iterate over each word in the array
            // Capitalize the first letter and concatenate with the rest of the word in lowercase
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" "); // Join the words back together with a space
}

export function setAttribute(attribute: string, value: string) {
    document.documentElement.setAttribute(`data-${attribute}`, value);
}

export function getConvertedWeight(weight: number, fromSystem: WeightSystem) {
    if (fromSystem == "lbs") {
        return `${(weight * 0.453592).toFixed(1)}kg`;
    }
    return `${(weight * 2.204624).toFixed(1)}lbs`;
}
