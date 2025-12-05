import { useEffect } from 'react'
import './App.css'
import { Routing } from './routes'

function App() {

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    
      <Routing />
  )
}

export default App
