export interface PlateSpec {
    weight: number;
    width: number;
    height: number;
}

export interface PlateSet {
    plates: PlateSpec[];
    barWeight: number;
    conversion: number;
}

export type WeightSystem = "lbs" | "kg";

export const PlateList: Record<WeightSystem, PlateSet> = {
    lbs: {
        plates: [
            { weight: 2.5, width: 10, height: 40 },
            { weight: 5, width: 15, height: 40 },
            { weight: 10, width: 15, height: 60 },
            { weight: 25, width: 15, height: 80 },
            { weight: 35, width: 20, height: 80 },
            { weight: 45, width: 30, height: 100 },
        ],
        barWeight: 45,
        conversion: 0.453592,
    },
    kg: {
        plates: [
            { weight: 1.25, width: 10, height: 40 },
            { weight: 2.5, width: 15, height: 40 },
            { weight: 5, width: 15, height: 60 },
            { weight: 10, width: 20, height: 60 },
            { weight: 15, width: 20, height: 80 },
            { weight: 20, width: 25, height: 80 },
            { weight: 25, width: 30, height: 100 },
        ],
        barWeight: 20,
        conversion: 2.204624,
    },
};
