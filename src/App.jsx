import { useState } from "react"; 
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'; 
import "./App.css"; 
import FormularioPreenchido from './components/FormularioPreenchido'; 

function FormularioInscricao() {
    const [formData, setFormData] = useState({
        name: "",  
        dob: "",   
        email: "", 
        phone: "", 
        cep: "",   
    });
    const [errorMessage, setErrorMessage] = useState(""); // Estado para a mensagem de erro

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Verificando se todos os campos foram preenchidos
        if (!formData.name || !formData.dob || !formData.email || !formData.phone || !formData.cep) {
            setErrorMessage("Por favor, preencha todos os campos antes de enviar o formulário.");
            return; // Não envia o formulário se algum campo estiver vazio
        }

        // Se tudo estiver preenchido, envia o formulário
        setErrorMessage(""); // Limpa a mensagem de erro
        navigate('/formulario-preenchido'); // Redireciona para a página preenchida
    };

    return (
        <div className="form-container">
            <div className="header">
                <img src="public/img/logo.png" alt="Logo" className="logo" />
                <h1>Formulário de Inscrição</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-group grupo-1"> 
                    <label htmlFor="name">Nome Completo</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Insira seu nome aqui"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="allRows">
                <div className="rows">
                    <div className="input-group grupo-2">
                        <label htmlFor="dob">Data de Nascimento</label>
                        <input
                            className="textArea"
                            type="text"
                            id="dob"
                            name="dob"
                            placeholder="DD/MM/AAAA"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group grupo-3">
                        <label htmlFor="email">Endereço de E-mail</label>
                        <input
                            className="textArea"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="exemplo@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="rows">
                    <div className="input-group grupo-4">
                        <label htmlFor="phone">Número de Telefone</label>
                        <input
                            className="textArea"
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="(xx) xxxxx-xxxx"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group grupo-5">
                        <label htmlFor="cep">CEP</label>
                        <input
                            className="textArea"
                            type="text"
                            id="cep"
                            name="cep"
                            placeholder="XXXXX-XXX"
                            value={formData.cep}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Exibe a mensagem de erro */}

                <button type="submit" className="submit-btn">
                    Enviar formulário
                </button>
            </form>
        </div>
    );
}

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FormularioInscricao />} />
                <Route path="/formulario-preenchido" element={<FormularioPreenchido />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
