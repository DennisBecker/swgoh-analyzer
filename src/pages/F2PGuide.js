import React from "react";
import { usePlayerCharacters, useCharacters } from "../hooks/useUnits"
import Squad from "../components/Squad";
import guide from "../data/f2pguide.json";

const F2PGuide = () => {
    const allycode = '726188947';
    const playerCaharacters = usePlayerCharacters(allycode);
    const characters = useCharacters();

    return (
        <>
            {guide?.map((faction) => 
                <section key={faction.name}>
                    <h1>{faction.name}</h1>
                    <Squad members={faction.units} units={playerCaharacters} chars={characters} />
                    <Squad members={[faction.target]} units={playerCaharacters} chars={characters} />
                </section>
            )}
        </>
    )
}

export default F2PGuide;