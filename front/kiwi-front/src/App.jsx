import './App.css';
import { useState } from 'react';
import confetti from 'canvas-confetti';

const App = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [verSenha, setVerSenha] = useState(false);
  const [temaEscuro, setTemaEscuro] = useState(true);

  const lidarComLogin = (evento) => {
    evento.preventDefault();
    console.log('Login enviado:', { email, senha });
  };

  const soltarConfeti = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x, y },
      colors: temaEscuro 
        ? ['#32583f', '#2c780b', '#38bdf8', '#ffffff'] 
        : ['#32583f', '#2c780b', '#0f172a', '#1e293b']
    });
  };

  return (
    <main className={`app ${temaEscuro ? 'tema-escuro' : 'tema-claro'}`}>
      <button 
        type="button" 
        className="btn-alternar-tema" 
        onClick={() => setTemaEscuro(!temaEscuro)}
      >
        {temaEscuro ? '🌙' : '☀️'}
      </button>

      <form className='card-login' onSubmit={lidarComLogin}>
        <h2 onMouseEnter={soltarConfeti}>Login</h2>
        <p className="subtitulo">Bem-vindo de volta!</p>

        <div className='entrada'>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <div className="entrada">
          <label htmlFor="senha">Senha</label>
          <div className="input-senha-wrapper">
            <input 
              id="senha"
              type={verSenha ? "text" : "password"} 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
              required 
              autoComplete="current-password"
            />
            <button 
              type="button" 
              className="btn-macaco" 
              onClick={() => setVerSenha(!verSenha)}
              tabIndex="-1"
            >
              {verSenha ? '🙉' : '🙈'}
            </button>
          </div>
        </div>

        <div className="opcoes-extras">
          <label className="lembrar">
            <input type="checkbox" id="lembrar-checkbox" />
            <span>Lembrar de mim</span>
          </label>
          <a href="#esqueceu" className="esqueci-senha">Esqueceu a senha?</a>
        </div>

        <button type="submit" className="btn-enviar">Entrar</button>

        <p className="criar-conta">
          Não tem uma conta? <a href="#cadastro">Cadastre-se</a>
        </p>
      </form>
    </main>
  );
}

export default App;