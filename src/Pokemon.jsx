import React from 'react';

function Pokemon({ pokemon, language }) {
  const { id, name, type, base, image } = pokemon;

  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <img src={image} alt={name[language]} />
      <p>ID: {id}</p>
      <p>Name: {name[language]}</p>
      <p>Type: {type.join(', ')}</p>
      <p>HP: {base.HP}</p>
      <p>Attack: {base.Attack}</p>
      <p>Defense: {base.Defense}</p>
      <p>Sp. Attack: {base['Sp. Attack']}</p>
      <p>Sp. Defense: {base['Sp. Defense']}</p>
      <p>Speed: {base.Speed}</p>
    </div>
  );
}

export default Pokemon;