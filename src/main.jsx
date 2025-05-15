import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
import App from './App.jsx'
import { DragDrop } from './DragDrop.jsx'
import { Prueba } from './Prueba.jsx'

createRoot(document.getElementById('root')).render(
  // <GoogleOAuthProvider clientId='9647985938-kdf58mh38kh8jth42t1gk1vpuibdps62.apps.googleusercontent.com'>
    <StrictMode>
    {/* //<App />  */}
    <DragDrop />
    {/* <Prueba /> */}
  </StrictMode>
  // {/* </GoogleOAuthProvider> */}
  
)
