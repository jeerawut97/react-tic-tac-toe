import { useState } from 'react';

export default function Player({initName, symbol, isActive}) {
    const [ playerName, setPlayerName ] = useState(initName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editPlayerName = <span className='player-name'>{playerName}</span>;
    if (isEditing) {
        editPlayerName = <input required type="text" value={playerName} onChange={handleChange}/>;

    }

    return (
        <li className={isActive? "active": undefined}>
            <span className="player">
                {editPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing? 'Save': 'Edit'}</button>
        </li>
    );
}
