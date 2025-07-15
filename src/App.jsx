import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Post } from "./components/Post";
import FormularioArtigo from "./components/FormularioArtigo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/novo-artigo" element={<FormularioArtigo />} />  
        
      </Routes>
    </Router>
  );
}

export default App;

