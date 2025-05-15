import './App.css';
import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState(null);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Token de acceso:', tokenResponse);
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });

        const data = await res.json();
        setUserInfo(data); // Guarda los datos del perfil
      } catch (err) {
        console.error('Error al obtener los datos del perfil:', err);
      }
    },
    onError: (errorResponse) => console.error('Error de login:', errorResponse),
  });

  return (
    <>
      <button onClick={() => login()}>Sign in with Google</button>

      {userInfo && (
        <div>
          <h2>Bienvenido, {userInfo.name}</h2>
          <p>Email: {userInfo.email}</p>
          <img src={userInfo.picture} alt="Foto de perfil" />
        </div>
      )}
      {console.log(userInfo)}
    </>
  );
}

export default App;
