import { use } from 'react';
import {useState} from 'react';

export default function Player({ initialName, symbol }) {
    const[playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {

        // Duas chamadas seguidas
        //setIsEditing(!isEditing);
        //setIsEditing(!isEditing); // ❌ pode terminar no mesmo valor

        // Forma recomendada
        setIsEditing((editing) => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

  return (
    <li>
      <span className="player">
        {isEditing ? (
            <input type="text" value={playerName}  required onChange={handleChange} />
        ) : (
            <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}