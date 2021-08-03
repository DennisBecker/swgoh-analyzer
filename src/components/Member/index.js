import React from "react";

const Member = (props) => {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.level}
            </td>
            <td>
                {props.rarity}
            </td>
            <td>
                {props.gear}
            </td>
            <td>
                {props.relic}
            </td>
        </tr>
    )
}

export default Member;