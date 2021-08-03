import { useMemo } from "react";
import { getCharacters, getPlayerUnits } from "../api/SWGoH";
import useApiResult from "./useApiResult";

export const usePlayerCharacters = (allycode) => {
    const playerCharacters = [];

    const requestUnits = useMemo(() => getPlayerUnits(allycode), [allycode]);
    const unitData = useApiResult(requestUnits);

    //let count = 0;

    if (unitData) {
        unitData?.units.forEach((item) => {
            // ++count;
            // if (count === 1) {
            //     console.log(item);
            // }

            if (item.data.combat_type === 1) {
                playerCharacters.push(item.data);
            }
        });

        playerCharacters.sort((a, b) => {
            return Math.sign(b.power - a.power);
        });
    }

    return playerCharacters;
}

export const usePlayerShips = (allycode) => {
    const request = useMemo(() => getPlayerUnits(allycode), [allycode]);
    const data = useApiResult(request);
    const playerShips = [];

    data?.units.forEach((item) => {
        if (item.data.combat_type === 2) {
            playerShips.push(item.data);
        }
    });

    playerShips.sort((a, b) => {
        return Math.sign(b.power - a.power);
    });

    return playerShips;
}

export const useCharacters = () => {
    const request = useMemo(() => getCharacters(), []);
    return useApiResult(request);
}