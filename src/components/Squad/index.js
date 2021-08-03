import React from "react";
import _ from "lodash";
import Member from "../Member";

const Squad = (props) => {

    if (!props.units) {
        return;
    }
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th><th>Level</th><th>Stars</th><th>Gear</th><th>Relic</th>
                </tr>
            </thead>
            <tbody>
                {props.members?.map((member) => {
                    const unit = mapUnit(props.units, props.chars, member);

                    if (!unit) {
                        return;
                    }

                    console.log(unit);

                    return (
                        <Member key={unit.base_id} name={unit.name} level={unit.level} rarity={unit.rarity} gear={unit.gear_level} relic={unit.relic_tier}></Member>
                    )
                })}
            </tbody>
        </table>
    )
}

const mapUnit = (units, chars, member) => {
    const unit = _.find(units, {name: member});

        if (unit) {
            return unit;
        }
        
        const char = _.find(chars, {name: member});

        if (char) {
            return {
                ...char,
                level: 0,
                rarity: 0,
                gear_level: 0,
                relic_tier: 0
            }
        }

        return null;
}

export default Squad;