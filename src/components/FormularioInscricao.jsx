import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook para navegar
import '../css/Inscricao.css';
const FormularioInscricao = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    cep: "",
  });

  const navigate = useNavigate(); // Usar o hook para navegação

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redireciona para a página "FormularioPreenchido"
    navigate("/formulario-preenchido");
  };

  return (
    <div className="form-container">
      <h1>Formulário de Inscrição</h1>
      <form onSubmit={handleSubmit}>
        {/* Campos do formulário */}
        <div>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {/* Adicione outros campos conforme necessário */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioInscricao;












