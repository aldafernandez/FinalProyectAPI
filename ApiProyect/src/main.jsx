import { createRoot } from 'react-dom/client'
import './library.css'
import './reset.css'
import { App } from './App.jsx'


createRoot(document.getElementById('root')).render(

  <div className='flex center-center column '>
    <App />
  </div>,
)
