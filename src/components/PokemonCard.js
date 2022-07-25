import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {
  const { name, hp, sprites  } = poke
  const [flipImage, setFlipImage] = useState(true)

  return (
    <Card>
      <div>
        <div className="image">
          <img 
            onClick={(e) => setFlipImage(!flipImage)} 
            src={flipImage ? sprites.front : sprites.back} 
            alt={name} 
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
