import { Routes, Route } from 'react-router-dom';
import PageInput from './paginas/PageInput';
import Horario from './paginas/Horario';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageInput />} />
      <Route path="/resultado" element={<Horario />} />
    </Routes>
  );
}

export default App;
