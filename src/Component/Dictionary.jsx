import React, { useState } from 'react';

const Dictionary = () => {
  const [inputTerm, setInputTerm] = useState('');
  const [definition, setDefinition] = useState('');

  const data = [
    { word: 'React', meaning: 'A JavaScript library for building user interfaces.' },
    { word: 'Component', meaning: 'A reusable building block in React.' },
    { word: 'State', meaning: 'An object that stores data for a component.' },
  ];

  const handleSubmit = () => {
    const searchTerm = inputTerm.trim().toLowerCase();

    const foundWord = data.find((entry) => entry.word.toLowerCase() === searchTerm);

    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition('Word not found in the dictionary.');
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          onChange={(e) => setInputTerm(e.target.value)}
          value={inputTerm}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <h4>Definition:</h4>
      <p>{definition}</p>
    </div>
  );
};

export default Dictionary;
