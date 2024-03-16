import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon'; // Assuming the Pokemon component is in a separate file

function MainComponent() {
  const [pokemonList, setPokemonList] = useState([]);
  const [language, setLanguage] = useState('english'); // Default language is English

  useEffect(() => {
    fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
      .then(response => response.json())
      .then(data => setPokemonList(data));
  }, []); // Empty dependency array to fetch data only once when component mounts

  return (
    <div>
      <div>
        <button onClick={() => setLanguage('english')}>English</button>
        <button onClick={() => setLanguage('japanese')}>Japanese</button>
        <button onClick={() => setLanguage('chinese')}>Chinese</button>
        <button onClick={() => setLanguage('french')}>French</button>
      </div>
      {pokemonList.map(pokemon => (
        <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
      ))}
    </div>
  );
}

export default MainComponent;