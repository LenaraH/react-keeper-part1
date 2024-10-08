import { useState } from 'react'
import './App.css'
import Header from './Header.jsx';
import Note from './Note.jsx';
import Footer from './Footer.jsx';
import notes from '../notes.js';

function createNotes(noteItem) {
  return <Note
  key={noteItem.key}
  title={noteItem.title}
  content={noteItem.content}
  />
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(noteItem => (
      <Note
       key={noteItem.key}
       title={noteItem.title}
       content={noteItem.content}
      />
      ))}
      <Footer />
    </div>
  );
}
export default App;