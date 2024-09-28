import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onNameChange }) {
    const [pName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEditClick() {
        setIsEditing((isEditing) => !isEditing);
        if (isEditing){
            onNameChange(symbol, pName);
        }
    }

    function handleEditing(event) {
        setPlayerName(event.target.value);
    }

    let playerName = (<span className="player-name">{pName}</span>);
    if (isEditing) {
        playerName = (<input type="text" value={pName} onChange={handleEditing} required />);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}