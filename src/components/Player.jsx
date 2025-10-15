import {useState} from 'react';

export default function Player({ name, symbol }) {

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {

        // Duas chamadas seguidas
        //setIsEditing(!isEditing);
        //setIsEditing(!isEditing); // ❌ pode terminar no mesmo valor

        // Forma recomendada
        setIsEditing((editing) => !editing);
    }

  return (
    <li>
      <span className="player">
        {isEditing ? (
            <input type="text" value={name}  required />
        ) : (
            <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}