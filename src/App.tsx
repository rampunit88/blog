import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import './App.css';
import { AppContextProvider } from './context';

function App() {
  useEffect(() => {
    document.title = "Study Point"
  }, [])
  
  return (
    <div className="App">
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </div>
  );
}

export default App;
