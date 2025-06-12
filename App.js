
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const dadJokes = [
  "Why don't eggs tell jokes? They'd crack each other up.",
  "What do you call fake spaghetti? An impasta.",
  "Why did the scarecrow win an award? Because he was outstanding in his field."
];

function App() {
  const [joke, setJoke] = useState("");

  return (
    <main style={{
      background: 'linear-gradient(to bottom right, #fef3c7, #fbcfe8)',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '5rem',
      fontFamily: 'sans-serif'
    }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        RadDad Ink
      </motion.h1>
      <p>Home of Nancy the Nin & Jarvus the Tartus</p>
      <button onClick={() => setJoke(dadJokes[Math.floor(Math.random() * dadJokes.length)])}>
        Tell Me a Dad Joke
      </button>
      {joke && <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>{joke}</p>}
    </main>
  );
}

export default App;
