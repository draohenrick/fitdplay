import React, { useState } from 'react';
import API from '../api';
import { useNavigate, Link } from 'react-router-dom';

export default function Login(){
  const [cpfOrCode, setCpfOrCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const nav = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    try{
      const res = await API.post('/auth/login', { cpfOrCode });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('tenantId', res.data.user.tenantId);
      localStorage.setItem('tenantName', res.data.user.tenantName || '');
      nav('/dashboard');
    }catch(err){
      setError(err.response?.data?.message || 'Erro no login');
    }
  }

  return (
    <div className="container">
      <div className="card" style={{maxWidth:540, margin:'40px auto'}}>
        <h2>Entrar</h2>
        <p className="small">Use CPF do gerente ou código do vendedor.</p>
        <form onSubmit={handleSubmit}>
          <div style={{marginBottom:8}}>
            <input className="input" value={cpfOrCode} onChange={e=>setCpfOrCode(e.target.value)} placeholder="CPF ou Código do Vendedor" style={{width:'100%'}} />
          </div>
          <div style={{marginBottom:8}}>
            <input className="input" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Senha (se cadastrada)" style={{width:'100%'}} />
          </div>
          {error && <div style={{color:'red', marginBottom:8}}>{error}</div>}
          <button className="btn" type="submit">Entrar</button>
        </form>
        <div style={{marginTop:12}} className="small">Ainda não tem uma loja? <Link to="/register">Cadastre aqui</Link></div>
        <div style={{marginTop:12}} className="small">Inicia em: https://fitpay-10ee3a71.base44.app/</div>
      </div>
    </div>
  )
}
