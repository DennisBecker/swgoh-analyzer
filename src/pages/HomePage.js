import React from "react";
import { usePlayerCharacters, useCharacters } from "../hooks/useUnits"
import Squad from "../components/Squad";

const HomePage = () => {
    const allycode = '726188947';
    const playerCaharacters = usePlayerCharacters(allycode);
    const characters = useCharacters();

    return (
        <>
            <h1>Galactic Legends</h1>
            <Squad members={['Rey', 'Supreme Leader Kylo Ren', 'Jedi Master Luke Skywalker', 'Jedi Master Kenobi', 'Sith Eternal Emperor']} units={playerCaharacters} chars={characters}></Squad>
            
            <h1>Legendary Characters</h1>
            <div>
                <Squad members={["Darth Traya", 'Grand Admiral Thrawn', 'Commander Luke Skywalker']} units={playerCaharacters}></Squad>
            </div>
            <ul>
                {playerCaharacters?.map((item) => 
                    <li key={item.base_id}>{item.name}</li>
                )}
            </ul>
        </>
    )
}

export default HomePage;