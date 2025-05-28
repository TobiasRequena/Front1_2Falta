import { Routes, Route } from 'react-router-dom';
import PageInput from './PageInput';
import { DragDrop } from './DragDrop';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageInput />} />
      <Route path="/resultado" element={<DragDrop />} />
    </Routes>
  );
}

export default App;
