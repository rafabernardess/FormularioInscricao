import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Componente principal
import FormularioInscricao from './components/FormularioInscricao'; // Componente do formulário de inscrição
import FormularioPreenchido from './components/FormularioPreenchido'; // Componente do formulário preenchido

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/formulario-inscricao" element={<FormularioInscricao />} />
      <Route path="/formulario-preenchido" element={<FormularioPreenchido />} />
    </Routes>
  </Router>
);
