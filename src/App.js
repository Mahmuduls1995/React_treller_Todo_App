import './App.css';
import Header from './components/Header';

import NoteBoard from './components/NoteBoard'

export default function App() {
  return (
    <div className='bg-gradient-to-r from-zinc-400 via-stone-400  to-zinc-400
         min-w-full h-screen'>
          <Header></Header>
      <NoteBoard />
    </div>
  );}



