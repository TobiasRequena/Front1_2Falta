import { Routes, Route } from 'react-router-dom';
import PageInput from './assets/paginas/PageInput';
import Horario from './assets/paginas/Horario';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageInput />} />
      <Route path="/resultado" element={<Horario />} />
    </Routes>
  );
}

export default App;
